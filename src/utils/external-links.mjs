const defaultSite = 'https://nxtkb.com';

export const isExternalHref = (href, site = defaultSite) => {
  if (typeof href !== 'string') return false;

  try {
    const url = new URL(href, site);
    const siteUrl = new URL(site);

    return (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname !== siteUrl.hostname;
  } catch {
    return false;
  }
};

export const externalLinkAttrs = (href, site = defaultSite) =>
  isExternalHref(href, site) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

export function rehypeExternalLinks(options = {}) {
  const site = options.site ?? defaultSite;

  return (tree) => {
    const visit = (node) => {
      if (node?.type === 'element' && node.tagName === 'a' && isExternalHref(node.properties?.href, site)) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }

      if (Array.isArray(node?.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}
