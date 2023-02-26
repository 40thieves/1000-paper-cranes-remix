import { type LinksFunction } from "@remix-run/react/dist/routeModules";
import Footer from "~/components/footer";
import Header from "~/components/header";

import Content from "~/data/explain.md";

import proseStylesUrl from "~/styles/prose.css";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: proseStylesUrl },
];

export default function Explain() {
  return (
    <>
      <Header />
      <main id="main" className="main__container">
        <article className="prose">
          <Content />
        </article>
      </main>

      <Footer />
    </>
  );
}
