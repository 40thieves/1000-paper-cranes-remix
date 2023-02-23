import { Link } from "@remix-run/react";
import CraneIcon from "./crane-icon";

export default function Header() {
  return (
    <>
      {/* TODO: <a href="#main">Skip to content</a> */}
      <header>
        <h1>
          <a href="/">
            <CraneIcon />
            <span className="sr-only">1000 Paper Cranes: Remix</span>
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
