# Your Daily Presence — starter site

A small personal website — Books, Quotes, Audiobooks, Music, and a couple of
static pages (Myself, To Think About). Mostly static files, which keeps it
fast and simple, plus one small live piece (the /admin content manager)
backed by a Netlify function so you can publish without redeploying.

## Files

```
index.html            → Home page
myself.html            → About / Myself page
books.html              → Books & Authors page
quotes.html              → Quotes page
audiobooks.html           → Audiobooks page
music.html                 → Music page
to-think-about.html         → To Think About page (deep dive on a single book)
admin.html                   → Password-protected content manager (see below)
style.css              → All the design (colors, fonts, layout)
data.js                → Your hand-edited content — safe to edit directly
render.js               → Turns data.js (+ live admin content) into the cards you see (no need to edit)
netlify/edge-functions/entries.ts → Backend for /admin — stores live-published entries
netlify.toml            → Netlify config
assets/                  → Images, favicon, admin app icon
```

## Two ways to add content

**1. Edit `data.js` directly** — open it in any plain text editor (Notepad,
TextEdit, VS Code, or editing directly on GitHub in the browser). Each
section is a list of entries like this:

```js
{
  title: "The Alchemist",
  author: "Paulo Coelho",
  images: [""],
  symbol: "नियति",
  links: [{ url: "", label: "" }],
  note: "A short novel about listening to what actually calls you..."
},
```

To add a new entry, copy one whole block (from `{` to `},`) and paste it
above or below, then change the words inside the quotes. Save the file,
commit, and push (or ask Claude to do it) — no build step, but it does need
a new deploy to go live.

- `images` is a list of direct photo links (each ending in .jpg, .png, etc).
  You can list more than one — the entry will show a small grid instead of a
  single photo. Leave it as `[""]` (or drop the field) if you don't have one
  yet, and a soft placeholder block will show instead. (The older single
  `image: ""` field still works too, if you'd rather keep it simple.)
- `links` is a list of `{ url, label }` pairs (a Goodreads page, a store
  page, an author's site, etc). The first link makes the entry's title
  clickable; any additional links show as small buttons underneath. Leave
  it as `[]`, or use the older single `link: ""` field, if you don't need
  more than one.
- For entries in `QUOTES` (and now `BOOKS` too), there's also a `symbol`
  field — a short Devanagari word or character (like `"ॐ"` or `"शांति"`)
  that shows up in the placeholder box when there's no image. Leave it as
  `""` for a plain empty box instead.

**2. Use the `/admin` page** — see below. This publishes instantly to the
live site, no deploy needed, and is the easier option if you're not
comfortable editing code.

## Previewing on your computer

Just double-click `index.html` to open it in your browser. That's enough
to preview design/content edits made directly in `data.js`. (Content
published through `/admin` only shows up once the site can reach the live
Netlify function, so it won't appear in a plain local file preview.)

## Publishing to yourdailypresence.com

The site is connected to GitHub and deploys automatically on Netlify —
pushing to the main branch publishes the live site within a minute or two,
no manual drag-and-drop step needed anymore.

## Admin page (/admin)

`yourdailypresence.com/admin` is a real, password-protected content
manager — not just a helper for generating text anymore:

- **Password-gated.** Only someone with the admin password (set as the
  `ADMIN_PASSWORD` environment variable in Netlify) can add, edit, archive,
  or delete content.
- **Publishes instantly.** Entries are saved to Netlify's live storage
  (Netlify Blobs) through a small backend function
  (`netlify/edge-functions/entries.ts`) and show up on the site right
  away — no redeploy needed.
- **Full CRUD.** Add new entries, edit existing ones, archive them (hides
  from the public site but keeps them for later), unarchive, or delete
  permanently.
- **Multiple images and links per entry.** Use the "+ Add another image" /
  "+ Add another link" buttons to attach more than one photo or link to a
  single entry.
- Covers Books, Quotes, Audiobooks, and Music. (Myself and To Think About
  are hand-edited in `data.js` since they're single, freeform pages rather
  than lists.)
- The page isn't linked from the site's navigation on purpose — you get to
  it by typing the URL directly, or from the home-screen shortcut.
- You can also just tell Claude what to add in your own words anytime,
  instead of using the form.

## Notes on the design

- Fonts: Cormorant Garamond (headings) + Jost (body), loaded from Google
  Fonts.
- The hero mark is an original layered lotus illustration with the Aum
  symbol centered, a faint rotating Metatron's Cube behind it, and a padma
  (lotus-petal) border ring framing the circle — all built as plain SVG, no
  image files. It's also used as the site favicon
  (`assets/favicon.svg` + PNG fallbacks).
- The site background is a translucent image of Shiva as Nataraja (a
  10th-century Chola bronze, via LACMA/Wikimedia Commons, public domain),
  faded behind a soft ivory tint so text stays easy to read, with a slow
  breathing glow layered on top (`body::after` in `style.css`) that gently
  drifts between gold and rose-maroon tones. To swap the photo, or adjust
  how visible it is, open `style.css` and find `body::before` near the
  top — change the `url(...)` to a different image address, or adjust the
  two `rgba(250, 246, 238, ...)` numbers (closer to 1 = more faded, closer
  to 0 = more visible image).
- Fully responsive down to mobile, and respects reduced-motion settings.
