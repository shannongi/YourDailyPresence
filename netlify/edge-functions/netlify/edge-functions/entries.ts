// ============================================================
// Live content storage for /admin.html — now that GitHub + Netlify
// are properly connected, this actually works (it didn't when we
// were using drag-and-drop, since that method doesn't support
// edge functions at all).
// ------------------------------------------------------------
// GET  /api/entries
//   → returns active (non-archived) entries, grouped by section.
//     Used by the site's own pages (books.html, quotes.html, etc).
//   → if the request includes a header "x-admin-password" that
//     matches ADMIN_PASSWORD, archived entries are included too
//     (with an "archived: true" flag) — used by the admin page.
//
// POST /api/entries
//   body: { password, section, entry } → adds a new entry.
//
// PUT  /api/entries
//   body: { password, section, id, entry } → merges the given
//   fields into the existing entry (title, note, archived, etc —
//   whatever's included). Used for both edits and archive/unarchive
//   (an archive toggle is just { entry: { archived: true } }).
//
// DELETE /api/entries
//   body: { password, section, id } → permanently removes an entry.
//   There's no undo — this is for entries already archived that
//   should be gone for good.
// ============================================================

import { getStore } from "npm:@netlify/blobs@8";

const SECTIONS = ["books", "quotes", "audiobooks", "music"];
const STORE_NAME = "content";
const KEY = "entries";

const CORS = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
};

async function readAll(store: any) {
  const existing = await store.get(KEY, { type: "json" });
  if (existing) return existing;
  return { books: [], quotes: [], audiobooks: [], music: [] };
}

function checkPassword(password: string | null | undefined) {
  return !!password && password === Netlify.env.get("ADMIN_PASSWORD");
}

export default async (request: Request) => {
  const store = getStore(STORE_NAME);

  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        ...CORS,
        "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
        "access-control-allow-headers": "content-type, x-admin-password",
      },
    });
  }

  if (request.method === "GET") {
    const all = await readAll(store);
    const adminHeader = request.headers.get("x-admin-password");
    const isAdmin = checkPassword(adminHeader);

    if (isAdmin) {
      return new Response(JSON.stringify(all), { headers: CORS });
    }

    // Public view: strip archived entries out of every section.
    const publicOnly: Record<string, any[]> = {};
    for (const section of SECTIONS) {
      publicOnly[section] = (all[section] || []).filter((e: any) => !e.archived);
    }
    return new Response(JSON.stringify(publicOnly), { headers: CORS });
  }

  if (request.method === "POST") {
    try {
      const body = await request.json();
      const { password, section, entry } = body || {};

      if (!checkPassword(password)) {
        return new Response(JSON.stringify({ error: "Incorrect password." }), { status: 401, headers: CORS });
      }
      if (!SECTIONS.includes(section)) {
        return new Response(JSON.stringify({ error: "Unknown section." }), { status: 400, headers: CORS });
      }
      if (!entry || !entry.title) {
        return new Response(JSON.stringify({ error: "Entry needs at least a title." }), { status: 400, headers: CORS });
      }

      const all = await readAll(store);
      entry.id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      entry.addedAt = new Date().toISOString();
      entry.archived = false;
      all[section].unshift(entry);
      await store.setJSON(KEY, all);

      return new Response(JSON.stringify({ ok: true, entry }), { headers: CORS });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Something went wrong saving that." }), { status: 500, headers: CORS });
    }
  }

  if (request.method === "PUT") {
    try {
      const body = await request.json();
      const { password, section, id, entry } = body || {};

      if (!checkPassword(password)) {
        return new Response(JSON.stringify({ error: "Incorrect password." }), { status: 401, headers: CORS });
      }
      if (!SECTIONS.includes(section) || !id || !entry) {
        return new Response(JSON.stringify({ error: "Missing section, id, or entry." }), { status: 400, headers: CORS });
      }

      const all = await readAll(store);
      const list = all[section] || [];
      const idx = list.findIndex((e: any) => e.id === id);
      if (idx === -1) {
        return new Response(JSON.stringify({ error: "Entry not found — it may have been deleted." }), { status: 404, headers: CORS });
      }

      list[idx] = { ...list[idx], ...entry, id, addedAt: list[idx].addedAt, updatedAt: new Date().toISOString() };
      all[section] = list;
      await store.setJSON(KEY, all);

      return new Response(JSON.stringify({ ok: true, entry: list[idx] }), { headers: CORS });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Something went wrong updating that." }), { status: 500, headers: CORS });
    }
  }

  if (request.method === "DELETE") {
    try {
      const body = await request.json();
      const { password, section, id } = body || {};

      if (!checkPassword(password)) {
        return new Response(JSON.stringify({ error: "Incorrect password." }), { status: 401, headers: CORS });
      }
      if (!SECTIONS.includes(section) || !id) {
        return new Response(JSON.stringify({ error: "Missing section or entry id." }), { status: 400, headers: CORS });
      }

      const all = await readAll(store);
      all[section] = (all[section] || []).filter((e: any) => e.id !== id);
      await store.setJSON(KEY, all);

      return new Response(JSON.stringify({ ok: true }), { headers: CORS });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Something went wrong deleting that." }), { status: 500, headers: CORS });
    }
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/entries" };
