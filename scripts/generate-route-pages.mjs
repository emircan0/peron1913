import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SITE_URL, seoPages } from '../src/seoPages.js';

const outputDirectory = join(import.meta.dirname, '..', 'dist');
const template = await readFile(join(outputDirectory, 'index.html'), 'utf8');

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function buildPage(slug, page) {
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  const url = `${SITE_URL}/${slug}`;

  return template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${url}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    );
}

await Promise.all(
  Object.entries(seoPages)
    .filter(([path]) => path !== '/')
    .map(([path, page]) =>
      writeFile(join(outputDirectory, `${path.slice(1)}.html`), buildPage(path.slice(1), page)),
  ),
);
