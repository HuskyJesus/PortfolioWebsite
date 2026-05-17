/* ============================================================
   CAIUS RUSCELLA PORTFOLIO — main.js
   ============================================================ */

/* ── Mobile Nav ─────────────────────────────────────────────── */
(function () {
  const toggle     = document.querySelector('.nav__toggle');
  const mobileNav  = document.querySelector('.nav__mobile');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();

/* ── Active Nav Link ────────────────────────────────────────── */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) link.classList.add('active');
  });
})();

/* ── Falling Petals ─────────────────────────────────────────── */
(function () {
  const container = document.querySelector('.petals');
  if (!container) return;

  function spawnPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const left      = Math.random() * 100;
    const drift     = (Math.random() - 0.4) * 130;
    const duration  = Math.random() * 10 + 12;
    const delay     = Math.random() * 6;
    const size      = Math.random() * 5 + 7;
    const rotation  = Math.random() * 45;

    petal.style.left            = `${left}%`;
    petal.style.width           = `${size}px`;
    petal.style.height          = `${size * 1.4}px`;
    petal.style.animationDuration  = `${duration}s`;
    petal.style.animationDelay     = `${delay}s`;
    petal.style.transform          = `rotate(${rotation}deg)`;
    petal.style.setProperty('--drift', `${drift}px`);

    container.appendChild(petal);
    setTimeout(() => petal.remove(), (duration + delay) * 1000);
  }

  /* Initial burst, then steady trickle */
  for (let i = 0; i < 10; i++) spawnPetal();
  setInterval(spawnPetal, 2200);
})();

/* ── Scroll Reveal ──────────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => obs.observe(el));
})();
