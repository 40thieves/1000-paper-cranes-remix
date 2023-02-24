import { json, type LinksFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";

import Header from "~/components/header";
import { getRandomBasicTools } from "~/utils/randomise";

import indexStylesUrl from "~/styles/index.css";

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

        <ul>
          {tools.map((tool) => {
            return <li key={tool.name}>{tool.name}</li>;
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
