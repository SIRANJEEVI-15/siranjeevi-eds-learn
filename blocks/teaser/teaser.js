import {
  div, h2, a, img,
} from '../../scripts/dom-helpers.js';

export default function decorate(block) {
  // Extract data from child divs (how the UE structures it)
  const children = Array.from(block.children);
  const title = children[0]?.textContent?.trim() || '';
  const description = children[1]?.textContent?.trim() || '';
  const imageUrl = children[2]?.querySelector('img')?.src || '';

  // CTA text and link are BOTH in children[3]
  const ctaContainer = children[3];
  const demoCtaText = ctaContainer?.querySelector('p:first-child')?.textContent?.trim() || '';
  const ctaLinkElement = ctaContainer?.querySelector('a');
  const demoCtaLink = ctaLinkElement?.href || '';

  // Clear existing content
  block.innerHTML = '';

  // Build the teaser using helper functions
  const teaserWrapper = div(
    { class: 'teaser-wrapper' },
    // Image section (only if image exists)
    imageUrl
      ? div(
        { class: 'teaser-image' },
        img({ src: imageUrl, alt: title, loading: 'lazy' }),
      )
      : null,
    // Content section
    div(
      { class: 'teaser-content' },
      // Title (only if exists)
      title ? h2(title) : null,
      // Description (only if exists)
      description ? div({ class: 'teaser-description' }, description) : null,
      // CTA link (only if both text and link exist)
      demoCtaText && demoCtaLink
        ? a({ href: demoCtaLink, class: 'teaser-cta' }, demoCtaText)
        : null,
    ),
  );

  // Append to block
  block.append(teaserWrapper);
}
