// Runs after `react-scripts build`. Generates what crawlers need from the same
// data the app renders: per-route HTML, sitemap.xml, feed.xml and llms.txt skills.

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = path.join(__dirname, "..");
const BUILD = path.join(ROOT, "build");

function loadTs(file) {
  const source = fs.readFileSync(path.join(ROOT, file), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2019 },
  });
  const mod = { exports: {} };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, require);
  return mod.exports;
}

const { nodes, childrenOf, roleNodes } = loadTs("src/data/graphData.ts");
const { projects } = loadTs("src/data/projects.ts");
const { routeSeo } = loadTs("src/data/seo.ts");
const { links, SITE_URL } = loadTs("src/data/links.ts");

const CV_LANGS = [
  ["en", "English"],
  ["pt", "Português"],
  ["es", "Español"],
];

const escapeXml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Fails the build rather than shipping a page whose tags silently did not change.
function replaceOnce(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`seo-build: no match for ${pattern}`);
  return html.replace(pattern, () => replacement);
}

const skillNames = Array.from(
  new Set(nodes.filter((n) => n.tier === "skill" || n.tier === "base").map((n) => n.label.en))
);

/* ---------------------------------------------------- page content */
function skillTree(id, trail) {
  const children = childrenOf(id).filter((c) => !trail.includes(c.id));
  if (!children.length) return "";
  const items = children
    .map((c) => `<li>${escapeXml(c.label.en)}${skillTree(c.id, trail.concat(c.id))}</li>`)
    .join("");
  return `<ul>${items}</ul>`;
}

const skillsContent = () =>
  roleNodes()
    .map(
      (r) =>
        `<h2>${escapeXml(r.label.en)}</h2>` +
        (r.description ? `<p>${escapeXml(r.description.en)}</p>` : "") +
        skillTree(r.id, [r.id])
    )
    .join("");

const projectsContent = () =>
  projects
    .map(
      (p) =>
        `<article><h2>${escapeXml(`${p.role.en} — ${p.org}`)}</h2>` +
        `<p>${escapeXml(`${p.start} to ${p.end}`)}</p>` +
        `<p>${escapeXml(p.summary.en)}</p>` +
        `<ul>${p.details.map((d) => `<li>${escapeXml(d.en)}</li>`).join("")}</ul>` +
        `<p>${escapeXml(`Technologies: ${p.tech.join(", ")}`)}</p></article>`
    )
    .join("");

const cvLinks = () =>
  `<ul>${CV_LANGS.map(
    ([lang, name]) => `<li><a href="/cv/cv-${lang}.pdf">${name} (PDF)</a></li>`
  ).join("")}</ul>`;

const profileLinks = () =>
  `<ul>${[
    ["LinkedIn", links.linkedin],
    ["GitHub", links.github],
    ["Arandu", links.aranduAuthor],
    ["RecortNews", links.recortnewsAuthor],
  ]
    .map(([name, url]) => `<li><a href="${escapeXml(url)}">${name}</a></li>`)
    .join("")}</ul>`;

const homeContent = () =>
  `<p>Software and AI engineer, founder of DW Corp, based in Brasília, Brazil.</p><ul>${Object.keys(routeSeo)
    .map((route) => `<li><a href="${route}">${escapeXml(routeSeo[route].title)}</a></li>`)
    .join("")}</ul>`;

const CONTENT = {
  "/habilidades": skillsContent,
  "/projetos": projectsContent,
  "/curriculo": cvLinks,
  "/contato": profileLinks,
};

// Inside #root, so ReactDOM.render replaces it on mount. Clipped to keep the
// pre-JS paint unchanged; crawlers that do not run JS read the markup.
const staticRoot = (heading, body) =>
  `<div id="root"><div style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">` +
  `<h1>${escapeXml(heading)}</h1>${body}</div></div>`;

/* ------------------------------------------------------- HTML pages */
function basePage() {
  const html = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
  const ldJson = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
  const match = html.match(ldJson);
  if (!match) throw new Error("seo-build: JSON-LD block not found");
  const person = JSON.parse(match[2]);
  person.knowsAbout = skillNames;
  const block = JSON.stringify(person).replace(/</g, "\\u003c");
  return replaceOnce(html, ldJson, match[1] + block + match[3]);
}

const withCanonical = (html, url) =>
  replaceOnce(html, /<\/head>/, `<link rel="canonical" href="${url}"/></head>`);

function writeRoutes(template) {
  Object.keys(routeSeo).forEach((route) => {
    const { title, description } = routeSeo[route];
    const url = SITE_URL + route;
    let html = withCanonical(template, url);
    html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${escapeXml(title)}</title>`);
    html = replaceOnce(
      html,
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${escapeXml(description)}"`
    );
    html = replaceOnce(
      html,
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${url}"`
    );
    html = replaceOnce(html, /<div id="root"><\/div>/, staticRoot(title, CONTENT[route]()));
    fs.writeFileSync(path.join(BUILD, `${route.slice(1)}.html`), html);
  });

  const home = replaceOnce(
    withCanonical(template, `${SITE_URL}/`),
    /<div id="root"><\/div>/,
    staticRoot("Danrley Pereira", homeContent())
  );
  fs.writeFileSync(path.join(BUILD, "index.html"), home);
}

/* ------------------------------------------------------ sitemap.xml */
function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ["/", ...Object.keys(routeSeo), ...CV_LANGS.map(([lang]) => `/cv/cv-${lang}.pdf`)];
  const entries = urls
    .map((u) => `  <url>\n    <loc>${SITE_URL}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n");
  fs.writeFileSync(
    path.join(BUILD, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
  );
}

/* --------------------------------------------------------- feed.xml */
function writeFeed() {
  const pubDate = (yearMonth) => {
    const [year, month] = yearMonth.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, 1)).toUTCString();
  };
  const items = [...projects]
    .sort((a, b) => b.start.localeCompare(a.start))
    .map((p) =>
      [
        "    <item>",
        `      <title>${escapeXml(`${p.role.en} — ${p.org}`)}</title>`,
        `      <link>${SITE_URL}/projetos</link>`,
        `      <guid isPermaLink="false">${escapeXml(`project-${p.id}`)}</guid>`,
        `      <pubDate>${pubDate(p.start)}</pubDate>`,
        `      <description>${escapeXml(p.summary.en)}</description>`,
        ...p.tech.map((t) => `      <category>${escapeXml(t)}</category>`),
        "    </item>",
      ].join("\n")
    )
    .join("\n");
  fs.writeFileSync(
    path.join(BUILD, "feed.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Danrley Pereira — Projects</title>
    <link>${SITE_URL}/projetos</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Project and work history of Danrley Pereira, software and AI engineer.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`
  );
}

/* --------------------------------------------------------- llms.txt */
function writeLlms() {
  const file = path.join(BUILD, "llms.txt");
  const section = `## Skills and tools\n\n${skillNames.join(", ")}\n\n## Optional`;
  fs.writeFileSync(file, replaceOnce(fs.readFileSync(file, "utf8"), /## Optional/, section));
}

writeRoutes(basePage());
writeSitemap();
writeFeed();
writeLlms();
console.log(`seo-build: ${Object.keys(routeSeo).length} routes, ${skillNames.length} skills, ${projects.length} feed items`);
