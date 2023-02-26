import { type Tool } from "~/types";

import CraneIcon from "~/components/crane-icon";

export default function Tools({ tools }: { tools: Tool[] }) {
  return (
    <ul className="tools__container">
      {tools.map((tool) => (
        <ToolCard key={tool.name} {...tool} />
      ))}
    </ul>
  );
}

function ToolCard({ name, url }: Tool) {
  return (
    <li className="tool-card">
      <a href={url} target="_blank" rel="noreferrer">
        <h3 className="tool-card__title">{name}</h3>
        <div>
          <CraneIcon />
        </div>
      </a>
    </li>
  );
}
