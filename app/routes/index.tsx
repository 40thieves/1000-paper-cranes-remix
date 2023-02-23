import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <main id="main">
        <section aria-label="Toolbox">
          <Link to="/">Challenge me</Link>
          <Link to="/advanced">Make it harder</Link>
        </section>

        <ul>
          <li>Tool 1</li>
        </ul>
      </main>
    </>
  );
}
