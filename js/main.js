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

/* ── Image Lightbox ─────────────────────────────────────────── */
(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image viewer');
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close image viewer">&times;</button><img src="" alt=""/>';
  document.body.appendChild(overlay);

  const img  = overlay.querySelector('img');
  const close = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    img.src = src; img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    close.focus();
  }
  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    img.src = '';
  }

  close.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  document.querySelectorAll('.project-gallery__item img').forEach(function (galleryImg) {
    galleryImg.style.cursor = 'zoom-in';
    galleryImg.addEventListener('click', function () { openLightbox(this.src, this.alt); });
  });
})();

/* ── Skills Popup ───────────────────────────────────────────── */
(function () {
  const skillDescriptions = {
    'VR / AR / MR Development':    'Building immersive spatial experiences across headsets and mixed reality platforms, from design through Unity implementation.',
    'Unity 2D / 3D':               'Primary engine for personal and studio projects - combat systems, procedural generation, XR experiences, and game jams.',
    'C# / C++ / Python':           'C# for Unity scripting and systems design; C++ and Python for tooling and coursework.',
    'Narrative & Systems Design':  'Designing story-driven gameplay loops, bark sheet libraries, quest scripts, and GDD documentation for player-facing systems.',
    'GDD & Documentation':         'Authoring full game design documents, system flowcharts, design specs, and balance spreadsheets used by full production teams.',
    'Project Lead':                'Leading cross-discipline design reviews, scoping tasks for technical and level design teams, and managing production timelines.',
    '360° & Cinematic Production': 'Client-facing 360° video and spatial audio production for AccessVR and VOTU LLC.',
    'Cross-Dept. Communication':   'Translating design intent into clear engineering tasks and flagging scope risks across art, engineering, and production.',
    'Unity / Unreal Engine':       'Unity for 2D/3D and XR projects; Unreal Engine for Mythbound and systems-focused coursework.',
    'Visual Studio / VS Code':     'Daily IDE for C# and C++ work, including debugging, refactoring, and script authoring.',
    'Adobe Cloud':                 'Photoshop, Premiere, and After Effects used in cinematic and marketing production pipelines.',
    'Perforce / GitHub':           'Perforce for studio-scale version control at Skaldforge; GitHub for personal projects and collaboration.',
    'ClickUp / Jira / Miro':       'Project management and design sprint planning tools used across FIEA coursework and studio roles.',
    'Microsoft / Google Suites':   'Documentation, spreadsheets, and collaboration tools for GDD writing and production tracking.',
    'Clockify':                    'Time tracking and billing tool used for client-facing work at Ruscella Immersive LLC.',
    'Canva':                       'Rapid visual presentation and pitch deck creation for design reviews and stakeholder communication.'
  };

  const modal = document.createElement('div');
  modal.className = 'skill-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <div class="skill-modal">
      <button class="skill-modal__close" aria-label="Close">&times;</button>
      <p class="skill-modal__title"></p>
      <div class="skill-modal__img">
        <span class="skill-modal__img-placeholder">[ Screenshot / example - add image path to main.js skillImages ]</span>
      </div>
      <p class="skill-modal__desc"></p>
    </div>`;
  document.body.appendChild(modal);

  const modalTitle   = modal.querySelector('.skill-modal__title');
  const modalImgWrap = modal.querySelector('.skill-modal__img');
  const modalDesc    = modal.querySelector('.skill-modal__desc');
  const closeBtn     = modal.querySelector('.skill-modal__close');

  /* Add image paths here when screenshots are ready:
     skillImages['Perforce / GitHub'] = 'images/skill-perforce.jpg'; */
  const skillImages = {};

  function openModal(skillName) {
    modalTitle.textContent = skillName;
    modalDesc.textContent  = skillDescriptions[skillName] || '';
    if (skillImages[skillName]) {
      modalImgWrap.innerHTML = `<img src="${skillImages[skillName]}" alt="${skillName} example"/>`;
    } else {
      modalImgWrap.innerHTML = '<span class="skill-modal__img-placeholder">[ Screenshot / example - add image path to main.js skillImages ]</span>';
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('.skill-item').forEach(function (item) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('click', function () { openModal(this.textContent.trim()); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(this.textContent.trim()); }
    });
  });
})();

/* ── Video Mute Toggle ──────────────────────────────────────── */
(function () {
  document.querySelectorAll('.hero__media, .project-gallery__item').forEach(function (wrap) {
    var video = wrap.querySelector('video');
    if (!video) return;
    var btn = document.createElement('button');
    btn.className = 'video-mute-btn';
    btn.setAttribute('aria-label', 'Unmute video');
    btn.textContent = '\u{1F507}';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      video.muted = !video.muted;
      btn.textContent = video.muted ? '\u{1F507}' : '\u{1F50A}';
      btn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
    });
    wrap.appendChild(btn);
  });
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
