import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from "@azure/ai-form-recognizer";
import { writeFile } from "fs/promises";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { scrape } from "~/server/scraper";
import { companyData } from "~/server/data";
import report from "splitted_text.json";
import { todaysMarket } from "~/server/today_market";

const vectaraUrl = "https://experimental.willow.vectara.io/v1/chat/completions";

const userPrompt =
  "You are a proffesional financial analyst, give me the most important decisions from the data, use numbers to back it up";

type SystemMessage = {
  role: "system";
  content: string;
};

const chatPayload = (messages: z.infer<typeof messageSchema>[]) => {
  return {
    model: "gpt-3.5-turbo",
    temperature: 0.3,
    messages,
  };
};

export const vectaraPayload = (
  systemMessages: SystemMessage[],
  userPrompt: string
) => {
  return {
    model: "gpt-3.5-turbo",
    temperature: 0.3,
    messages: [
      ...systemMessages,
      {
        role: "user",
        content: userPrompt,
      },
    ],
  };
};

export const requestSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("url"),
    url: z.string().url(),
  }),
  z.object({
    type: z.literal("text"),
    company: z.string(),
  }),
  z.object({
    type: z.literal("market"),
  }),
]);

export const messageSchema = z.object({
  role: z.enum(["system", "assistant", "user"]),
  content: z.string(),
});

const chatCompletionSchema = z.object({
  id: z.string(),
  object: z.literal("chat.completion"),
  created: z.number(),
  model: z.string(),
  usage: z.object({
    prompt_tokens: z.number(),
    completion_tokens: z.number(),
    total_tokens: z.number(),
  }),
  choices: z.array(
    z.object({
      message: messageSchema,
      finish_reason: z.string(),
      index: z.number(),
    })
  ),
});

const getNextMessage = async (messages: z.infer<typeof messageSchema>[]) => {
  const response = await fetch(vectaraUrl, {
    method: "POST",
    headers: {
      "customer-id": "2421414240",
      "x-api-key": process.env["VECTARA_API_KEY"],
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatPayload(messages)),
  });

  return chatCompletionSchema.parse(await response.json()).choices;
};

const getInitialMessage = async (chunks: any) => {
  const sys_messages = chunks.map((c) => {
    return {
      role: "system",
      content: c.pageContent,
    } as const;
  });

  const response = await fetch(vectaraUrl, {
    method: "POST",
    headers: {
      "customer-id": "2421414240",
      "x-api-key": process.env["VECTARA_API_KEY"],
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vectaraPayload(sys_messages, userPrompt)),
  });

  return chatCompletionSchema.parse(await response.json());
};

export const chatRouter = createTRPCRouter({
  initialChatMessage: publicProcedure
    .input(requestSchema)
    .query(async ({ input }) => {
      // Split the content into chunks able to consumed by ChatGPT
      const splitter = new RecursiveCharacterTextSplitter();
      let chunks;

      if (input.type == "url") {
        const endpoint =
          "https://haseef-recognizer.cognitiveservices.azure.com/";
        const credential = new AzureKeyCredential(process.env.AZURE_API_KEY);

        const client = new DocumentAnalysisClient(endpoint, credential);

        const poller = await client.beginAnalyzeDocumentFromUrl(
          "prebuilt-document",
          // The form recognizer service will access the following URL to a receipt image and extract data from it
          input.url
        );

        // The "prebuilt-read" model (`beginReadDocume  nt` method) only extracts information about the textual content of the
        // document, such as page text elements and information about the language of the text.
        const result = await poller.pollUntilDone();
        const { pages, content } = result;
        let chatResponse: z.infer<typeof chatCompletionSchema>;

        if (!pages || pages.length <= 0) {
          return {
            error: "No pages were extracted from the document.",
          } as const;
        } else {
          // join all the paragraphs with \\n
          if (!result.paragraphs) throw new Error("No paragraphs found");

          const chunks = await splitter.createDocuments([content]);

          chatResponse = await getInitialMessage(chunks);

          await writeFile(`splitted-text.json`, JSON.stringify(chunks), "utf8");
          await writeFile(
            "chatgpt-response.json",
            JSON.stringify(chatResponse),
            "utf8"
          );

          const messages = chatResponse.choices.map((c) => c.message);

          return {
            messages,
          } as const;
        }
      } else if (input.type === "text") {
        const companyName = input.company.toLowerCase();

        if (companyName !== "aramco") {
          const companyUrl = companyData.find(
            (c) => c.companyName.toLowerCase() === companyName
          )?.companyUrl;

          const contentArray = await scrape({ url: companyUrl });

          const baseSystemMessage = [
            `The following is finacial data for the company ${companyName}`,
          ];

          const content = [...baseSystemMessage, ...contentArray].join("\n\n");

          chunks = await splitter.createDocuments([content]);
        } else {
          chunks = report;
        }

        const sys_messages = chunks.map((c) => {
          return {
            role: "system",
            content: c.pageContent,
          } as const;
        });

        const chatResponse = await getInitialMessage(chunks);

        const nextMessage =
          chatResponse.choices[chatResponse.choices.length - 1]?.message;

        const messages = [...sys_messages, nextMessage];

        return {
          messages,
        } as const;
      } else if (input.type === "market") {
        // const text: string[] = [];
        // for (let i = 0; i < todaysMarket.length; i++) {
        //   const mystring = [];
        //   for (let j = 0; j < todaysMarket[i].length; j++) {
        //     mystring.push(todaysMarket[i][j]);
        //   }
        //   const str = JSON.stringify(mystring[i]);

        //   text.push(str);
        // }

        // chunks = await splitter.createDocuments(
        //   todaysMarket.map((m) => JSON.stringify(m))
        // );

        const sys_messages = todaysMarket.flatMap((m) => {
          return {
            role: "system",
            content: JSON.stringify(m),
          } as const;
        });

        console.log(sys_messages[0])

        const response = await fetch(vectaraUrl, {
          method: "POST",
          headers: {
            "customer-id": "2421414240",
            "x-api-key": process.env["VECTARA_API_KEY"],
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vectaraPayload(sys_messages, userPrompt)),
        });

        const chatgptResponse = await response.json();
        // console.log(chatgptResponse);

        const chatResponse = chatCompletionSchema.parse(await response.json());

        const nextMessage =
          chatResponse.choices[chatResponse.choices.length - 1]?.message;

        const messages = [...sys_messages, nextMessage];

        return {
          messages,
        } as const;
      }
    }),
  nextMessage: publicProcedure
    .input(z.array(messageSchema))
    .mutation(async ({ input }) => {
      const messages = await getNextMessage(input);

      const _messages = messages.map((m) => m.message);

      return {
        message: _messages[0],
      };
    }),
});
