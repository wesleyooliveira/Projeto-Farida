document.documentElement.classList.add('js');

(function () {
  const revealElements = document.querySelectorAll('.js-revela');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(function (element) {
      element.classList.add('visivel');
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(function (element) {
    observer.observe(element);
  });

  window.requestAnimationFrame(function () {
    document.querySelectorAll('.hero .js-revela').forEach(function (element) {
      element.classList.add('visivel');
    });
  });
})();
