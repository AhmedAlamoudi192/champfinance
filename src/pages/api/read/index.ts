import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from "@azure/ai-form-recognizer";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import { writeFile } from "fs/promises";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const vectaraUrl = "https://experimental.willow.vectara.io/v1/chat/completions";

const userPrompt =
  "You are an investor, what are the most important stats in this report. Also please explain every technical term you use in Layman term";

type SystemMessage = {
  role: "system";
  content: string;
};

export const vectaraPayload = (
  systemMessages: SystemMessage[],
  userPrompt: string
) => {
  return {
    model: "gpt-3.5-turbo",
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
    text: z.string(),
  }),
]);

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
      message: z.object({
        role: z.enum(["system", "assistant", "user"]),
        content: z.string(),
      }),
      finish_reason: z.string(),
      index: z.number(),
    })
  ),
});

const getChatCompletion = async (chunks: any) => {
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = requestSchema.parse(req.body);

  // Split the content into chunks able to consumed by ChatGPT
  const splitter = new RecursiveCharacterTextSplitter();

  if (payload.type == "url") {
    const endpoint = "https://haseef-recognizer.cognitiveservices.azure.com/";
    const credential = new AzureKeyCredential(process.env.AZURE_API_KEY);

    const client = new DocumentAnalysisClient(endpoint, credential);

    const poller = await client.beginAnalyzeDocumentFromUrl(
      "prebuilt-document",
      // The form recognizer service will access the following URL to a receipt image and extract data from it
      payload.url
    );

    // The "prebuilt-read" model (`beginReadDocument` method) only extracts information about the textual content of the
    // document, such as page text elements and information about the language of the text.
    const result = await poller.pollUntilDone();
    const { pages, content } = result;
    let chatResponse: z.infer<typeof chatCompletionSchema>;

    if (!pages || pages.length <= 0) {
      res
        .status(400)
        .json({ error: "No pages were extracted from the document." });
    } else {
      // join all the paragraphs with \\n
      if (!result.paragraphs) throw new Error("No paragraphs found");

      const chunks = await splitter.createDocuments([content]);

      chatResponse = await getChatCompletion(chunks);

      await writeFile(`splitted-text.json`, JSON.stringify(chunks), "utf8");
      await writeFile(
        "chatgpt-response.json",
        JSON.stringify(chatResponse),
        "utf8"
      );

      res.status(200).json({
        assitantResponse: chatResponse.choices[chatResponse.choices.length - 1],
      });
    }
  } else if (payload.type === "text") {
    const chunks = await splitter.createDocuments([payload.text]);
    const chatResponse = await getChatCompletion(chunks);

    res.status(200).json({
      assitantResponse: chatResponse.choices[chatResponse.choices.length - 1],
    });
  }
};

export default handler;
