// observer.js
export const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const correspondingArticle = document.getElementsByClassName('image-transition');
    
    if (correspondingArticle) {
      if (entry.isIntersecting) {
        correspondingArticle.classList.add('image-transition');
      } else {
        correspondingArticle.classList.remove('image-transition');
      }
    }
  })
}, { rootMargin: '-30% 0px' });

export function observeImages() {
  // Disconnect the observer from all previously observed elements
  observer.disconnect();

  const imageElements = document.querySelectorAll('image');
  imageElements.forEach((el) => observer.observe(el));
}