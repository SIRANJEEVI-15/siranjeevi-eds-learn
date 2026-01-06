import { div, h3, p, img } from '../../scripts/dom-helpers.js';

export default function decorate(block) {
  // Extract all card data from child divs
  const children = Array.from(block.children);
  
  // Clear existing content
  block.innerHTML = '';

  // Create cards container
  const cardsContainer = div({ class: 'carousel-cards-container' });

  // Process each child as a card (each child represents one card)
  children.forEach((child) => {
    const cardChildren = Array.from(child.children);
    // console.log("child", child);
    
    
    const imageUrl = cardChildren[0]?.querySelector('img')?.src || '';
    const title = cardChildren[1]?.textContent?.trim() || '';
    const description = cardChildren[2]?.innerHTML || '';

    // Build individual card
    const card = div(
      { class: 'carousel-card' },
      imageUrl ? div(
        { class: 'carousel-card-image' },
        img({ src: imageUrl, alt: title, loading: 'lazy' })
      ) : "",
      div(
        { class: 'carousel-card-content' },
        title ? h3({ class: 'carousel-card-title' }, title) : "",
        description ? div({ class: 'carousel-card-description', innerHTML: description }) : ""
      )
    );

    cardsContainer.append(card);
  });

  // Append cards to block
  block.append(cardsContainer);
}
