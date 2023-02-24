import { json, type LinksFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";

import Header from "~/components/header";
import { getRandomBasicTools } from "~/utils/randomise";
import { type Tool } from "~/types";

import indexStylesUrl from "~/styles/index.css";
import CraneIcon from "~/components/crane-icon";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesUrl },
];

export const loader = async () => {
  return json({
    tools: getRandomBasicTools(),
  });
};

export default function Index() {
  const { tools } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main id="main" className="main__container">
        <section aria-label="Toolbox" className="toolbox__container">
          <Link to="/" className="button">
            Challenge me
          </Link>
          <Link to="/advanced" className="button">
            Make it harder
          </Link>
        </section>

        <ul className="tools__container">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
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
