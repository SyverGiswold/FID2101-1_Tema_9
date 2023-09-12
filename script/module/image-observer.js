// observer.js
export const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const imageNumber = entry.target.id.replace('image', '');
    const correspondingArticle = document.getElementById(`article${imageNumber}`);
    
    console.log(`Image number: ${imageNumber}`); // Log the image number
    console.log(`Corresponding article:`, correspondingArticle); // Log the corresponding article element
    
    if (correspondingArticle) {
      if (entry.isIntersecting) {
        console.log('Image is intersecting'); // Log when the image is intersecting
        correspondingArticle.classList.add('show');
      } else {
        console.log('Image is not intersecting'); // Log when the image is not intersecting
        correspondingArticle.classList.remove('show');
      }
    }
  })
}, { rootMargin: '-30% 0px' });

export function observeImages() {
  // Disconnect the observer from all previously observed elements
  observer.disconnect();

  const imageElements = document.querySelectorAll('[id^="image"]');
  imageElements.forEach((el) => observer.observe(el));
}
