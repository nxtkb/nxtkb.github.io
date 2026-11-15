import type { ImageMetadata } from 'astro';

// Import the original files, rather than their public URLs, so Astro can
// optimize them at build time. Keep the public files for existing direct links.
const images = import.meta.glob<ImageMetadata>(
  '../../public/products/**/*.{png,jpg,jpeg}',
  { eager: true, import: 'default' },
);

export function productImage(path: string): ImageMetadata {
  const image = images[`../../public${path}`];
  if (!image) throw new Error(`Product image not found: ${path}`);
  return image;
}
