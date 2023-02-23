import assets from "~/data/assets.json";
import css from "~/data/css.json";
import deployment from "~/data/deployment.json";
import generator from "~/data/generator.json";
import template from "~/data/template.json";
import javascript from "~/data/javascript.json";

interface Tool {
  name: string;
  url: string;
  description: string;
  image: string;
  requires?: string;
  advanced?: boolean;
}

const allTools = [
  assets as Tool[],
  css as Tool[],
  deployment as Tool[],
  generator as Tool[],
  template as Tool[],
  javascript as Tool[],
];

function pickRandom(tools: Tool[]) {
  return tools[Math.floor(Math.random() * tools.length)];
}

export function getRandomTools() {
  const shuffledTools = allTools.sort(() => Math.random() - 0.5);

  return shuffledTools.map((tool) => {
    return pickRandom(tool);
  });
}

export function getRandomBasicTools() {
  return getRandomTools().filter((tool, index) => {
    return !tool.advanced && index < 3;
  });
}
