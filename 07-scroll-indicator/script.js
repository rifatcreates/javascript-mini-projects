const progress = document.querySelector('.progress');

function implementScrollIndicator() {
  let scrollTop = window.scrollY;
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = window.innerHeight;

  let scrollableHeight = documentHeight - windowHeight;
  let scrollPercentage = (scrollTop / scrollableHeight) * 100;

  progress.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', implementScrollIndicator);
