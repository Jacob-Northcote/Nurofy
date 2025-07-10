// script.js
// Handles iframe thumbnail clicks using event delegation
document.addEventListener('DOMContentLoaded', function () {
  // Event delegation for iframe thumbnail clicks
  const iframeWrapper = document.querySelector('.iframe-wrapper');
  if (iframeWrapper) {
    iframeWrapper.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('iframe-thumbnail')) {
        const url = target.getAttribute('data-iframe-url');
        if (url) {
          replaceThumbnailWithIframe(target, url);
        }
      }
    });
  }
});

/**
 * Replaces a thumbnail image with an iframe for the given URL.
 * @param {HTMLElement} imgElement - The image element to replace.
 * @param {string} url - The URL to load in the iframe.
 */
function replaceThumbnailWithIframe(imgElement, url) {
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = '300';
  iframe.height = '200';
  iframe.style.border = 'none';
  iframe.setAttribute('title', 'Embedded App');

  const card = imgElement.parentElement;
  card.replaceChild(iframe, imgElement);
} 