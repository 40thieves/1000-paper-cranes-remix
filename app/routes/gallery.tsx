import Footer from "~/components/footer";
import Header from "~/components/header";

import Content from "~/data/gallery.mdx";

export default function Gallery() {
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
