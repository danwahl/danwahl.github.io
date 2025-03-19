// Add Wikipedia-like interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Generate table of contents
  generateTOC();

  // Add tooltips to citation needed tags
  const citationNeededTags = document.querySelectorAll('.citation-needed');

  citationNeededTags.forEach(tag => {
    tag.setAttribute('title', 'This claim needs a citation');
  });
});

// Generate simple table of contents from h2 and h3 elements
function generateTOC() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  const content = document.querySelector('.wikipedia-content');
  if (!content) return;

  const headings = content.querySelectorAll('h2, h3');
  if (headings.length < 2) {
    // Hide TOC if there aren't enough headings
    const toc = document.getElementById('toc');
    if (toc) toc.style.display = 'none';
    return;
  }

  let sectionCount = 1;
  let subsectionCount = 0;
  let currentH2List = null;

  headings.forEach((heading, index) => {
    // Create an ID for the heading if it doesn't have one
    if (!heading.id) {
      heading.id = 'section-' + index;
    }

    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;

    if (heading.tagName.toLowerCase() === 'h2') {
      subsectionCount = 0;
      const listItem = document.createElement('li');
      const sectionNumber = document.createElement('span');
      sectionNumber.className = 'toc-section-number';
      sectionNumber.textContent = sectionCount + ' ';
      sectionCount++;

      listItem.appendChild(sectionNumber);
      listItem.appendChild(link);

      // Create a nested ul for potential h3s
      currentH2List = document.createElement('ul');
      listItem.appendChild(currentH2List);

      tocList.appendChild(listItem);
    } else if (heading.tagName.toLowerCase() === 'h3' && currentH2List) {
      subsectionCount++;
      const listItem = document.createElement('li');
      const sectionNumber = document.createElement('span');
      sectionNumber.className = 'toc-section-number';
      sectionNumber.textContent =
          (sectionCount - 1) + '.' + subsectionCount + ' ';

      listItem.appendChild(sectionNumber);
      listItem.appendChild(link);
      currentH2List.appendChild(listItem);
    }
  });
}
