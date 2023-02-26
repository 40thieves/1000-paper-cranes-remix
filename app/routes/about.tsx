import { type LinksFunction } from "@remix-run/node";

import Footer from "~/components/footer";
import Header from "~/components/header";

import Content from "~/data/about.md";

import indexStylesUrl from "~/styles/index.css";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesUrl },
];

export default function About() {
  return (
    <>
      <Header />
      <main id="main" className="main__container">
        <article>
          <Content />
        </article>
      </main>

      <Footer />
    </>
  );
}
