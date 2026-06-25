/* ═══════════════════════════════════════════════
   SUPRIYA M — Portfolio Scripts
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ══ SCROLL PROGRESS ══ */
  const bar = document.getElementById('progress-bar');
  function updateProgress() {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (bar) bar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ══ NEURAL CANVAS (signature element) ══
     Animated dots connected by proximity lines —
     represents neural network topology */
  function initNeural() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, nodes = [], raf;
    const NODE_COUNT = 55;
    const CONNECT_DIST = 140;
    const SPEED = 0.28;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function makeNode() {
      return {
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-SPEED, SPEED),
        vy: rand(-SPEED, SPEED),
        r: rand(1.2, 2.4),
      };
    }

    function init() {
      resize();
      nodes = Array.from({ length: NODE_COUNT }, makeNode);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      /* edges */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(111,76,255,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      /* nodes */
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(167,139,250,0.5)';
        ctx.fill();
      });
    }

    function move() {
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
    }

    function loop() {
      move();
      draw();
      raf = requestAnimationFrame(loop);
    }

    init();
    loop();

    window.addEventListener('resize', () => {
      cancelAnimationFrame(raf);
      init();
      loop();
    });
  }

  /* ══ TYPEWRITER ══ */
  function initTypewriter() {
    const el = document.getElementById('tw-text');
    if (!el) return;

    const phrases = [
      'Published Researcher',
      'IISc KSCST Selectee',
      'AI/ML Engineer',
      'GenAI Developer',
      'Open to Opportunities',
    ];

    let pi = 0, ci = 0, deleting = false;

    function tick() {
      const phrase = phrases[pi];
      if (!deleting) {
        el.textContent = phrase.slice(0, ci + 1);
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          setTimeout(tick, 2000);
          return;
        }
      } else {
        el.textContent = phrase.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 72);
    }
    tick();
  }

  /* ══ REVEAL ON SCROLL ══ */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => obs.observe(el));
  }

  /* ══ NAV — active link + mobile toggle ══ */
  function initNav() {
    const ham = document.getElementById('hamburger');
    const links = document.getElementById('nav-links');
    if (ham && links) {
      ham.addEventListener('click', () => {
        const open = links.classList.toggle('nav__links--open');
        ham.classList.toggle('open', open);
        ham.setAttribute('aria-expanded', open);
      });
      links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          links.classList.remove('nav__links--open');
          ham.classList.remove('open');
          ham.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* Active section highlight */
    const sections = document.querySelectorAll('section[id]');
    const navAs = document.querySelectorAll('.nav__link[href^="#"]');

    function highlightNav() {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navAs.forEach(a => {
        a.classList.toggle('nav__link--active', a.getAttribute('href') === '#' + current);
      });
    }
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
  }

  /* ══ CONTACT FORM ══ */
  function initForm() {
    const btn = document.getElementById('form-submit');
    const statusEl = document.getElementById('form-status');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const name    = (document.getElementById('cf-name')?.value || '').trim();
      const email   = (document.getElementById('cf-email')?.value || '').trim();
      const company = (document.getElementById('cf-company')?.value || '').trim();
      const msg     = (document.getElementById('cf-msg')?.value || '').trim();

      if (!name || !email || !msg) {
        statusEl.textContent = '⚠ Please fill in name, email, and message.';
        statusEl.style.color = '#f87171';
        return;
      }

      const subject = `Portfolio Contact — ${name}${company ? ' · ' + company : ''}`;
      const body = `${msg}\n\n——\nFrom: ${name} <${email}>${company ? '\nCompany: ' + company : ''}`;
      window.location.href = `mailto:supriyachola123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      statusEl.textContent = '✓ Opening your email client...';
      statusEl.style.color = '#4ade80';
    });
  }

  /* ══ SMOOTH PILL HOVER (skill pills) ══ */
  function initSkillHover() {
    document.querySelectorAll('.pill').forEach(p => {
      p.addEventListener('mouseenter', () => p.style.transform = 'scale(1.04)');
      p.addEventListener('mouseleave', () => p.style.transform = '');
    });
  }

  /* ══ YEAR IN FOOTER ══ */
  function setFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ══ BOOT ══ */
  document.addEventListener('DOMContentLoaded', () => {
    initNeural();
    initTypewriter();
    initReveal();
    initNav();
    initForm();
    initSkillHover();
    setFooterYear();
  });
})();
