import path from "path";
import fs from "fs/promises";
import { marked } from "marked";

const DATA_DIR = path.join(__dirname, "../data");

export async function getHTMLFromMarkdown(fileName: string) {
  const pathName = path.join(DATA_DIR, fileName);

  const md = await fs.readFile(pathName, "utf-8");
  return marked(md.toString());
}
