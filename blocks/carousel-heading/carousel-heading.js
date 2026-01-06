import { div, h2, p } from '../../scripts/dom-helpers.js';

export default function decorate(block) {
  // Extract data from child divs
  const children = Array.from(block.children);
  
  const mainHeading = children[0]?.textContent?.trim() || '';
  const subHeading = children[1]?.textContent?.trim() || '';

  // Clear existing content
  block.innerHTML = '';

  // Build the heading component
  const headingWrapper = div(
    { class: 'heading-wrapper' },
    mainHeading ? h2({ class: 'heading-main' }, mainHeading) : null,
    subHeading ? p({ class: 'heading-sub' }, subHeading) : null
  );

  // Append to block
  block.append(headingWrapper);
}
