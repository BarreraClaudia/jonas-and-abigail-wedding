// --- Header ---
const header = document.querySelector('header');
window.addEventListener(
  'scroll',
  () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  },
  { passive: true },
);

// --- Scroll Reveal ---
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.15 },
);

revealEls.forEach((el) => revealObserver.observe(el));
