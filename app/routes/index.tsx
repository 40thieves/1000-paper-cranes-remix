import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";

import Header from "~/components/header";
import { getRandomBasicTools } from "~/utils/randomise";

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
      <main id="main">
        <section aria-label="Toolbox">
          <Link to="/">Challenge me</Link>
          <Link to="/advanced">Make it harder</Link>
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
