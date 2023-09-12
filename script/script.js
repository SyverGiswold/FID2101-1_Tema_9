// main.js
import { getPageContent, onLinkNavigate } from './module/utils.js';
import { observeImages } from './module/image-detecion.js';

// Observe images as soon as the script runs
observeImages();

onLinkNavigate(async ({ toPath }) => {
  const content = await getPageContent(toPath);
  
  startViewTransition(() => {
    // This is a pretty heavy-handed way to update page content.
    // In production, you'd likely be modifying DOM elements directly,
    // or using a framework.
    // innerHTML is used here just to keep the DOM update super simple.
    document.body.innerHTML = content;  

    // Observe images after each page transition
    observeImages();
  });
});

// A little helper function like this is really handy
// to handle progressive enhancement.
function startViewTransition(callback) {
  if (!document.startViewTransition) {
    callback();
    return;
  }
  
  document.startViewTransition(callback);
}
