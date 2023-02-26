import Footer from "~/components/footer";
import Header from "~/components/header";

import Content from "~/data/about.md";

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
