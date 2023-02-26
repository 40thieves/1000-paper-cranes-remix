import { json, type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";

import { getRandomTools } from "~/utils/randomise";

import Header from "~/components/header";
import Toolbox from "../components/Toolbox";
import Tools from "../components/Tools";

import indexStylesUrl from "~/styles/index.css";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesUrl },
];

export const loader = async () => {
  return json({
    tools: getRandomTools(),
  });
};

export default function Advanced() {
  const { tools } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main id="main" className="main__container">
        <Toolbox />
        <Tools tools={tools} />
      </main>
      <Footer />
    </>
  );
}
