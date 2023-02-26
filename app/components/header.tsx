import { Link } from "@remix-run/react";

import CraneIcon from "./crane-icon";

export default function Header() {
  return (
    <>
      {/* TODO: <a href="#main">Skip to content</a> */}
      <header className="nav__container">
        <h1 className="nav__title">
          <a href="/">
            <CraneIcon />
            <span className="sr-only">1000 Paper Cranes: Remix</span>
          </a>
        </h1>
        <nav className="nav__links">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/explain">explain</Link>
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
