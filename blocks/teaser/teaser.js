export default function decorate(block) {
  const title = block.dataset.title;
  const description = block.dataset.description;
  const ctaText = block.dataset.ctaText;
  const ctaLink = block.dataset.ctaLink;

  block.innerHTML = `
    <div class="teaser-content">
      ${title ? `<h2>${title}</h2>` : ''}
      ${description ? `<p>${description}</p>` : ''}
      ${
        ctaText && ctaLink
          ? `<a href="${ctaLink}" class="teaser-cta">${ctaText}</a>`
          : ''
      }
    </div>
  `;
}
