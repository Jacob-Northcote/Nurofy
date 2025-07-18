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

// Footer email AJAX submission
function setupFooterForm() {
  const form = document.querySelector('.footer-email-form');
  if (!form) return;

  // Add a div for messages
  let msgDiv = form.querySelector('.footer-form-msg');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.className = 'footer-form-msg';
    form.appendChild(msgDiv);
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form data
    const email = form.querySelector('input[type="email"]').value.trim();
    // Send AJAX request without reCAPTCHA
    fetch('http://127.0.0.1:5000/subscribe', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email})
    })
    .then(res => res.json().then(data => ({status: res.status, ...data})))
    .then(data => {
      // Optionally show a message or handle response
      form.reset();
    })
    .catch(() => {
      // Optionally handle network error
    });
  });
}

document.addEventListener('DOMContentLoaded', setupFooterForm); 