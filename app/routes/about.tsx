import { json, type LoaderFunction, type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getHTMLFromMarkdown } from "~/utils/markdown.server";

import Footer from "~/components/footer";
import Header from "~/components/header";

import indexStylesUrl from "~/styles/index.css";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesUrl },
];

export let loader: LoaderFunction = async () => {
  const html = await getHTMLFromMarkdown("about.md");
  return json({
    html,
  });
};

export default function Index() {
  const { html } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main id="main" className="main__container">
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>

      <Footer />
    </>
  );
}
