import {
  json,
  type LinksFunction,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
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

export let loader: LoaderFunction = async ({ request }) => {
  // Check query params to see if the user has requested old skool mode, then
  // pass the flag along to the component
  const url = new URL(request.url);
  const oldSkool = url.searchParams.get("old_skool");
  return json({ oldSkool });
};

export default function App() {
  const { oldSkool } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {/* If the user has requested old skool mode, don't add frontend JS. Bringing Back 1995™️ */}
        {!oldSkool && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}
