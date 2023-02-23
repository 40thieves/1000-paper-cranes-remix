import GithubIcon from "./github-icon";

export default function Footer() {
  return (
    <>
      <footer>
        <a
          className="footer__github"
          href="https://github.com/CodeYourFuture/1000-Paper-Cranes/"
        >
          <GithubIcon />
          <span>Find us on GitHub</span>
        </a>
        <p>
          A project of
          <a href="https://codeyourfuture.io">Code Your Future</a>
          <br />
          Licensed under a Creative Commons Attribution-ShareAlike 4.0
          International License.
        </p>
      </footer>
    </>
  );
}
