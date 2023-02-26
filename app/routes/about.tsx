import { type LinksFunction } from "@remix-run/node";

import Footer from "~/components/footer";
import Header from "~/components/header";

import indexStylesUrl from "~/styles/index.css";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesUrl },
];

export default function Index() {
  return (
    <>
      <Header />
      <main id="main" className="main__container"></main>

      <Footer />
    </>
  );
}
