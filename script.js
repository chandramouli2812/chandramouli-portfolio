// Scroll-spy: highlight the current section in the nav.
(() => {
  const links = document.querySelectorAll('.nav__links a');
  const sections = Array.from(links)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const setActive = (id) => {
    links.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
})();

// Reminder in console for the placeholder profile links.
document.querySelectorAll('[data-fill]').forEach(a => {
  if (a.getAttribute('href') === '#') {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      console.warn(`Add your real ${a.dataset.fill} URL in index.html`);
    });
  }
});
