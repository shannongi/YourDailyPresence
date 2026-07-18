# Your Daily Presence — starter site

A small, static website with three sections: **Books**, **Food**, **Places**.
No database, no backend — everything lives in plain files, which makes it
fast, free to host, and easy for you to edit yourself.

## Files

```
index.html          → Home page
books.html           → Books & Authors page
quotes.html          → Quotes page
audiobooks.html      → Audiobooks page
music.html           → Music page
to-think-about.html  → To Think About page (deep dives on a single book)
style.css            → All the design (colors, fonts, layout)
data.js              → YOUR CONTENT — edit this one
render.js            → Turns data.js into the cards you see (no need to edit)
```

## Adding or editing content

Open **data.js** in any plain text editor (Notepad, TextEdit, VS Code, or
even editing directly on GitHub in the browser). Each section is a list of
entries like this:

```js
{
  title: "The Alchemist",
  author: "Paulo Coelho",
  image: "",
  link: "",
  note: "A short novel about listening to what actually calls you..."
},
```

To add a new entry, copy one whole block (from `{` to `},`) and paste it
above or below, then change the words inside the quotes. Do the same in
`QUOTES` (using `author`).

For `image`, paste a direct link to a photo (ending in .jpg, .png, etc.).
If you don't have one, leave it as `""` and a soft placeholder block
will show instead.

For `link`, paste a web address (a Goodreads page, a store page,
a map link, etc). When it's filled in, the entry's title becomes
clickable and opens that page in a new tab. Leave it as `""` to keep the
title as plain text.

For entries in `QUOTES`, there's also a `symbol` field — a short
Devanagari word or character (like `"ॐ"` or `"शांति"`) that shows up in
the placeholder box next to the quote when there's no `image`. Leave it
as `""` for a plain empty box instead.

Save the file, refresh the page, and your change appears — no build step.

## Previewing on your computer

Just double-click `index.html` to open it in your browser. That's enough
to preview edits before publishing.

## Publishing to yourdailypresence.com

The easiest free options are **Netlify** or **GitHub Pages**. Netlify is
the simplest if you've never deployed a site before:

1. Go to netlify.com and create a free account.
2. Drag this whole folder onto the "Deploy manually" area of your Netlify
   dashboard. It publishes instantly with a temporary address.
3. In Netlify, go to **Domain settings → Add a domain** and enter
   `yourdailypresence.com`.
4. Netlify will show you 1–2 DNS records to add. Log into wherever you
   bought the domain (GoDaddy, Namecheap, Google Domains, etc.), find DNS
   settings, and add those records.
5. DNS changes can take anywhere from a few minutes to a few hours to
   take effect.

Whenever you want to update the live site after editing `data.js`, just
drag the folder onto Netlify again (or connect it to GitHub for automatic
updates on every save — ask if you'd like help setting that up).

## Add Content page (/admin)

There's a helper page at `yourdailypresence.com/admin` that makes it
easy to add new content. Pick a section (Books, Quotes, Audiobooks, or
Music), fill in the fields, and tap "Generate" — it writes out the
details as a neat block of text you can copy and send to Claude. Claude
then adds it to `data.js` and sends back an updated site to deploy.

- This page doesn't publish anything by itself — it's just a tidy way to
  gather the details so nothing gets forgotten. It works entirely in your
  browser, so it's safe and needs no password.
- The page isn't linked from the site's navigation on purpose — you get
  to it by typing the URL directly, or from the home-screen shortcut.
- You can also just tell Claude what to add in your own words anytime —
  this page is only here for convenience.

## Notes on the design


- Fonts: Cormorant Garamond (headings) + Jost (body), loaded from Google
  Fonts.
- The geometric line-art marks (in the header, dividers, and faint hero
  background) are quiet sacred-geometry motifs. The header icon is a
  simplified rendering of the alchemical Philosopher's Stone symbol
  (circle, square, triangle, circle).
- The site background is a translucent image of Shiva as Nataraja (a
  10th-century Chola bronze, via LACMA/Wikimedia Commons, public domain),
  faded behind a soft ivory tint so text stays easy to read. To swap it
  for a different image, or adjust how visible it is, open `style.css`
  and find `body::before` near the top — change the `url(...)` to a
  different image address, or adjust the two `rgba(250, 246, 238, ...)`
  numbers (closer to 1 = more faded, closer to 0 = more visible image).
- Fully responsive down to mobile, and respects reduced-motion settings.
