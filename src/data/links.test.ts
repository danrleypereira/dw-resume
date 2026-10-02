import fs from 'fs';
import path from 'path';
import { displayUrl, links, SITE_URL, whatsappUrl } from './links';

const readPublic = (file: string) =>
  fs.readFileSync(path.join(__dirname, '../../public', file), 'utf8');

test('builds WhatsApp links with an optional encoded message', () => {
  expect(whatsappUrl()).toBe('https://wa.me/5561994234712');
  expect(whatsappUrl('Hi there')).toBe('https://wa.me/5561994234712?text=Hi%20there');
});

test('formats URLs for display', () => {
  expect(displayUrl('https://www.linkedin.com/in/danrleypereira/')).toBe('linkedin.com/in/danrleypereira');
});

test.each(['index.html', 'llms.txt'])('public/%s uses the canonical profile links', (file) => {
  const content = readPublic(file);
  const urls = content.match(/https?:\/\/[^\s"'<>)]+/g) ?? [];

  expect(content).toContain(links.github);
  expect(content).toContain(links.linkedin);
  // No stale GitHub accounts or bare danrleypereira.com (which does not resolve).
  urls
    .filter((url) => url.includes('github.com/'))
    .forEach((url) => expect(url.startsWith(links.github)).toBe(true));
  urls
    .filter((url) => /danrleypereira\.com(\/|$)/.test(url))
    .forEach((url) => expect(url).toBe(SITE_URL));
});

test('public/index.html declares the author pages as rel="me" and in sameAs', () => {
  const html = readPublic('index.html');
  [links.aranduAuthor, links.recortnewsAuthor].forEach((url) => {
    expect(html).toContain(`<link rel="me" href="${url}" />`);
    expect(html).toContain(`"${url}"`);
  });
});
