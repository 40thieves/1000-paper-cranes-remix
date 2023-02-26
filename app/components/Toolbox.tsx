import { Link } from "@remix-run/react";

export default function Toolbox() {
  return (
    <section aria-label="Toolbox" className="toolbox__container">
      <Link to="/" className="button">
        Challenge me
      </Link>
      <Link to="/advanced" className="button">
        Make it harder
      </Link>
    </section>
  );
}
