// Add Wikipedia-like interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Add tooltips to citation needed tags
  const citationNeededTags = document.querySelectorAll('.citation-needed');

  citationNeededTags.forEach(tag => {
    tag.setAttribute('title', 'This claim needs a citation');
  });
});
