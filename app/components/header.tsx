import { Link } from "@remix-run/react";
import Crane from "./crane";

export default function Header() {
  return (
    <>
      <a href="#main">Skip to content</a>
      <header>
        <h1>
          <a href="/">
            <Crane />
            <span>1000 Paper Cranes: Remix</span>
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
