import {
  AzureKeyCredential,
  DocumentAnalysisClient,
  DocumentSpan,
} from "@azure/ai-form-recognizer";
import { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { z } from "zod";
import { writeFile } from "fs/promises";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const urlSchema = z.object({
  url: z.string()
});

// eslint-disable-next-line @typescript-eslint/require-await
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlToRead = urlSchema.parse(req.body).url;

  const endpoint = "https://haseef-recognizer.cognitiveservices.azure.com/";
  const credential = new AzureKeyCredential(process.env.AZURE_API_KEY);

  const client = new DocumentAnalysisClient(endpoint, credential);

  const poller = await client.beginAnalyzeDocumentFromUrl(
    "prebuilt-document",
    // The form recognizer service will access the following URL to a receipt image and extract data from it
    urlToRead
  );

  // The "prebuilt-read" model (`beginReadDocument` method) only extracts information about the textual content of the
  // document, such as page text elements and information about the language of the text.
  const result = await poller.pollUntilDone();
  const { pages, content, styles, languages } = result;

  if (!pages || pages.length <= 0) {
    res
      .status(400)
      .json({ error: "No pages were extracted from the document." });
  } else {
    // join all the paragraphs with \\n
    if (!result.paragraphs) throw new Error("No paragraphs found");
    const splitter = new RecursiveCharacterTextSplitter();

    const p_content = result.paragraphs.map((p) => p.content);

    const output = await splitter.createDocuments(p_content);

    await writeFile(
      `splitted-text.json`,
      JSON.stringify(output),
      "utf8"
    );
  }
  await writeFile(`result.json`, JSON.stringify(result), "utf8");
  res.status(200).json({ content, pages, languages, styles });
};

/**
 * Gets the text slices that a set of spans refer to from a document's content.
 *
 * @param content - the `content` field of an analyze result (reading-order concatenated text)
 * @param spans - an iterable of DocumentSpan objects that will be used to slice the content
 */
export function* getTextOfSpans(
  content: string,
  spans: Iterable<DocumentSpan>
): Iterable<string> {
  for (const span of spans) {
    yield content.slice(span.offset, span.offset + span.length);
  }
}

export default handler;
