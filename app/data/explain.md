# 1000 Paper Cranes: Remix

## How is this site built?

This site is built with [Remix](https://remix.run/).

## What is interesting about this site?

### Remix

Remix is a React-based "meta framework". This means most of the time you'll be writing plain-old React components, just like you know and love.

However the framework comes with an extra super power: your pages will be rendered (converted to HTML) on the server first, before being sent to the user's browser. This should make your pages extra speedy 🏎️

### Old Skool mode

To show this off, this site has a hidden feature: if you add `?old_skool=true` to the end of the URL, then the server will **not** include any frontend JavaScript. This makes the page act much more like a page from 1995! Which sounds like a bad thing but _can_ be good for performance!

To test out this feature:

1. Open the dev tools
2. Navigate to the Network tab
3. Reload the page

Have a look through the things that the browser loaded in the dev tools. Can you find the JS files?

Now let's turn on Old Skool mode:

1. Add `?old_skool=true` to the end of the URL
2. Hit Enter to load the page

Now if you look through in the dev tools, you shouldn't see any JS files! If you're making a page without much interactivity, this is usually a good thing as it'll speed up the page load 🏆
