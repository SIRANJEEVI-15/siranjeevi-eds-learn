export default function decorate(block) {
  // Extract data from child divs (how the UE structures it)
  const children = Array.from(block.children);
  
  const title = children[0]?.textContent?.trim() || '';
  const description = children[1]?.innerHTML || '';
  const image = children[2]?.querySelector('img')?.src || '';
  const demo_ctaText = children[3]?.textContent?.trim() || '';
  const demo_ctaLink = children[4]?.querySelector('a')?.href || '';

  // Build the teaser HTML
  block.innerHTML = `
    <div class="teaser-wrapper">
      ${image ? `<div class="teaser-image"><img src="${image}" alt="${title}"></div>` : ''}
      <div class="teaser-content">
        ${title ? `<h2>${title}</h2>` : ''}
        ${description ? `<div class="teaser-description">${description}</div>` : ''}
        ${demo_ctaText && demo_ctaLink ? `<a href="${demo_ctaLink}" class="teaser-cta">${demo_ctaText}</a>` : ''}
      </div>
    </div>
  `;
}
