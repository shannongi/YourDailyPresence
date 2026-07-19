// Renders arrays from data.js into entry cards.
// You shouldn't need to edit this file — edit data.js instead.

function renderEntries(containerId, list, subLabelKey) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!list || list.length === 0) {
    el.innerHTML = '<p class="empty">Nothing added here yet — open data.js and add your first entry.</p>';
    return;
  }

  el.innerHTML = list.map(item => {
    const img = item.image
      ? `<img class="thumb" src="${item.image}" alt="${item.title}">`
      : (item.symbol
          ? `<div class="thumb symbol" aria-hidden="true"><span>${item.symbol}</span></div>`
          : `<div class="thumb" aria-hidden="true"></div>`);
    const sub = item[subLabelKey] ? `<p class="sub">${item[subLabelKey]}</p>` : '';
    const titleHtml = item.link
      ? `<h2><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h2>`
      : `<h2>${item.title}</h2>`;
    return `
      <article class="entry">
        ${img}
        <div>
          ${titleHtml}
          ${sub}
          <p class="desc">${item.note || ''}</p>
        </div>
      </article>`;
  }).join('');
}

function renderSpotlight(containerId, spotlight) {
  const el = document.getElementById(containerId);
  if (!el || !spotlight) return;

  const booksHtml = spotlight.books.map(b => {
    const titleHtml = b.link
      ? `<a href="${b.link}" target="_blank" rel="noopener noreferrer">${b.title}</a>`
      : b.title;
    return `
      <div class="spotlight-book">
        <h3>${titleHtml} <span class="year">${b.year || ''}</span></h3>
        <p class="desc">${b.note || ''}</p>
        ${b.quote ? `<blockquote>&ldquo;${b.quote}&rdquo;</blockquote>` : ''}
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="spotlight-header">
      <p class="eyebrow">Author Spotlight</p>
      <h2>${spotlight.name} <span class="years">${spotlight.years || ''}</span></h2>
      <p class="bio">${spotlight.bio || ''}</p>
    </div>
    <div class="spotlight-books">${booksHtml}</div>
  `;
}

function renderAudiobooks(containerId, list) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!list || list.length === 0) {
    el.innerHTML = '<p class="empty">Nothing added here yet.</p>';
    return;
  }

  el.innerHTML = list.map(item => {
    const linkHtml = item.link
      ? `<a class="listen-link" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel || ('Listen to ' + item.title)}</a>`
      : '';
    const quoteHtml = item.quote
      ? `<blockquote>&ldquo;${item.quote}&rdquo;<span class="attr">— ${item.byline || ''}, <em>${item.title}</em></span></blockquote>`
      : '';
    const reflectionsHtml = (item.reflections || []).map(r =>
      `<p class="reflection">${r}</p>`
    ).join('');

    return `
      <article class="audio-entry">
        <h2>${item.title}</h2>
        ${item.byline ? `<p class="sub">${item.byline}</p>` : ''}
        ${item.bio ? `<p class="desc">${item.bio}</p>` : ''}
        ${quoteHtml}
        ${reflectionsHtml}
        ${linkHtml}
      </article>`;
  }).join('');
}

function renderToThinkAbout(containerId, data) {
  const el = document.getElementById(containerId);
  if (!el || !data || !data.book) return;

  const b = data.book;

  const sectionsHtml = (b.sections || []).map(sec => `
    <div class="tta-section">
      <h3>${sec.title}</h3>
      <ol>
        ${sec.items.map(item => `<li>${item}</li>`).join('')}
      </ol>
    </div>
  `).join('');

  const listenHtml = b.link
    ? `<div class="tta-listen"><a class="listen-link" href="${b.link}" target="_blank" rel="noopener noreferrer">${b.linkLabel || ('Listen to ' + b.title)}</a></div>`
    : '';

  el.innerHTML = `
    <article class="tta-book">
      <p class="tta-eyebrow">${b.year || ''}</p>
      <h2>${b.title}</h2>
      <p class="tta-byline">${b.author || ''}</p>
      ${b.bio ? `<p class="tta-bio">${b.bio}</p>` : ''}
      ${b.summary ? `<p class="tta-summary">${b.summary}</p>` : ''}
      ${listenHtml}
      <div class="tta-sections">${sectionsHtml}</div>  if (!el || !spotlight) return;

  const booksHtml = spotlight.books.map(b => {
    const titleHtml = b.link
      ? `<a href="${b.link}" target="_blank" rel="noopener noreferrer">${b.title}</a>`
      : b.title;
    return `
      <div class="spotlight-book">
        <h3>${titleHtml} <span class="year">${b.year || ''}</span></h3>
        <p class="desc">${b.note || ''}</p>
        ${b.quote ? `<blockquote>&ldquo;${b.quote}&rdquo;</blockquote>` : ''}
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="spotlight-header">
      <p class="eyebrow">Author Spotlight</p>
      <h2>${spotlight.name} <span class="years">${spotlight.years || ''}</span></h2>
      <p class="bio">${spotlight.bio || ''}</p>
    </div>
    <div class="spotlight-books">${booksHtml}</div>
  `;
}

function renderAudiobooks(containerId, list) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!list || list.length === 0) {
    el.innerHTML = '<p class="empty">Nothing added here yet.</p>';
    return;
  }

  el.innerHTML = list.map(item => {
    const linkHtml = item.link
      ? `<a class="listen-link" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel || ('Listen to ' + item.title)}</a>`
      : '';
    const quoteHtml = item.quote
      ? `<blockquote>&ldquo;${item.quote}&rdquo;<span class="attr">— ${item.byline || ''}, <em>${item.title}</em></span></blockquote>`
      : '';
    const reflectionsHtml = (item.reflections || []).map(r =>
      `<p class="reflection">${r}</p>`
    ).join('');

    return `
      <article class="audio-entry">
        <h2>${item.title}</h2>
        ${item.byline ? `<p class="sub">${item.byline}</p>` : ''}
        ${item.bio ? `<p class="desc">${item.bio}</p>` : ''}
        ${quoteHtml}
        ${reflectionsHtml}
        ${linkHtml}
      </article>`;
  }).join('');
}

function renderToThinkAbout(containerId, data) {
  const el = document.getElementById(containerId);
  if (!el || !data || !data.book) return;

  const b = data.book;

  const sectionsHtml = (b.sections || []).map(sec => `
    <div class="tta-section">
      <h3>${sec.title}</h3>
      <ol>
        ${sec.items.map(item => `<li>${item}</li>`).join('')}
      </ol>
    </div>
  `).join('');

  const listenHtml = b.link
    ? `<div class="tta-listen"><a class="listen-link" href="${b.link}" target="_blank" rel="noopener noreferrer">${b.linkLabel || ('Listen to ' + b.title)}</a></div>`
    : '';

  el.innerHTML = `
    <article class="tta-book">
      <p class="tta-eyebrow">${b.year || ''}</p>
      <h2>${b.title}</h2>
      <p class="tta-byline">${b.author || ''}</p>
      ${b.bio ? `<p class="tta-bio">${b.bio}</p>` : ''}
      ${b.summary ? `<p class="tta-summary">${b.summary}</p>` : ''}
      ${listenHtml}
      <div class="tta-sections">${sectionsHtml}</div>
    </article>
  `;
}

// Live search — filters the already-rendered cards in one or more containers
// as you type, sharing a single "no matches" message across all of them.
// `groups` is an array of { containerId, itemSelector }.
function initSearch(inputId, groups) {
  const input = document.getElementById(inputId);
  if (!input || !groups || groups.length === 0) return;

  const resolved = groups
    .map(g => ({ container: document.getElementById(g.containerId), itemSelector: g.itemSelector }))
    .filter(g => g.container);
  if (resolved.length === 0) return;

  const lastGroup = resolved[resolved.length - 1].container;
  const emptyMsg = document.createElement('p');
  emptyMsg.className = 'empty search-empty';
  emptyMsg.textContent = 'No matches — try a different search.';
  emptyMsg.style.display = 'none';
  lastGroup.parentNode.insertBefore(emptyMsg, lastGroup.nextSibling);

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    let totalItems = 0;
    let totalVisible = 0;

    resolved.forEach(({ container, itemSelector }) => {
      const items = container.querySelectorAll(itemSelector);
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const matches = query === '' || text.includes(query);
        item.style.display = matches ? '' : 'none';
        totalItems++;
        if (matches) totalVisible++;
      });
    });

    emptyMsg.style.display = (totalVisible === 0 && totalItems > 0) ? 'block' : 'none';
  });
}

// ---------- Daily rotation helpers ----------

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

// Picks a stable index for today, offset lets different features avoid landing
// on "day 1" of their list simultaneously.
function dailyIndex(length, offset) {
  if (!length) return 0;
  return (dayOfYear(new Date()) + (offset || 0)) % length;
}

// ---------- Today's Spotlight (home page) ----------

function renderFeaturedSpotlight(containerId, pool) {
  const el = document.getElementById(containerId);
  if (!el || !pool || pool.length === 0) return;

  const index = dailyIndex(pool.length, 0);
  const item = pool[index];

  el.innerHTML = `
    <a class="spotlight-today-card" href="${item.link}">
      <span class="spotlight-today-tag">Today's Spotlight · ${item.category}</span>
      <h2>${item.title}</h2>
      <p>${item.subtitle || ''}</p>
    </a>
  `;
}

// ---------- Quote of the Day + Shuffle (home page) ----------

let _qotdList = [];
let _qotdCurrentIndex = -1;

function renderQuoteOfDay(textId, sourceId, quotes) {
  if (!quotes || quotes.length === 0) return;
  _qotdList = quotes;
  _qotdCurrentIndex = dailyIndex(quotes.length, 3); // offset so it differs from spotlight
  paintQuoteOfDay(textId, sourceId);
}

function paintQuoteOfDay(textId, sourceId) {
  const q = _qotdList[_qotdCurrentIndex];
  if (!q) return;
  const textEl = document.getElementById(textId);
  const sourceEl = document.getElementById(sourceId);
  if (textEl) textEl.textContent = '"' + q.title + '"';
  if (sourceEl) sourceEl.textContent = q.author;
}

function shuffleQuoteOfDay(textId, sourceId) {
  if (_qotdList.length <= 1) {
    paintQuoteOfDay(textId, sourceId);
    return;
  }
  let next;
  do {
    next = Math.floor(Math.random() * _qotdList.length);
  } while (next === _qotdCurrentIndex);
  _qotdCurrentIndex = next;
  paintQuoteOfDay(textId, sourceId);
}
// ---------- Dynamic content added via /admin.html ----------

async function fetchDynamicEntries(section) {
  try {
    const res = await fetch('/api/entries');
    if (!res.ok) return [];
    const data = await res.json();
    return (data && data[section]) || [];
  } catch (err) {
    return [];
  }
}
