// Churchtown Badminton Club — shared JS
(function () {
  'use strict';

  // ── Mobile Nav Toggle ──
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // ── Active nav link ──
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    if (link.getAttribute('href') === path) link.classList.add('active');
    if (path === '/' && link.getAttribute('href') === '/index.html') link.classList.add('active');
  });

  // Close mobile nav when clicking a link
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
})();
