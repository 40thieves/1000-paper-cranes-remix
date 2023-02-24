import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesUrl from "~/styles/styles.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "1000 Paper Cranes",
  viewport: "width=device-width,initial-scale=1",
});

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
