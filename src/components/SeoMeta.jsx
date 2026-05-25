import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, seoPages } from '../seoPages';

function setMetaContent(selector, attribute, key, content) {
  let meta = document.head.querySelector(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

export default function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = seoPages[pathname] || seoPages['/'];
    const path = seoPages[pathname] ? pathname : '/';
    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    document.title = page.title;
    canonical.setAttribute('href', canonicalUrl);
    setMetaContent('meta[name="description"]', 'name', 'description', page.description);
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', page.title);
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', page.description);
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', page.title);
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', page.description);
  }, [pathname]);

  return null;
}
