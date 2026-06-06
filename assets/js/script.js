'use strict';

(function () {
  /* ===================================================================
     Theme Toggle
     =================================================================== */
  var html = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var THEME_KEY = 'portfolio-theme';

  var stored = localStorage.getItem(THEME_KEY) || 'dark';
  html.setAttribute('data-theme', stored);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ===================================================================
     Mobile Menu
     =================================================================== */
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');
  var overlay = null;

  function closeMenu() {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.remove('open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (overlay) {
      overlay.classList.remove('open');
    }
  }

  function openMenu() {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.add('open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    if (overlay) {
      overlay.classList.add('open');
    }
  }

  function createOverlay() {
    var div = document.createElement('div');
    div.className = 'mobile-overlay';
    div.setAttribute('aria-hidden', 'true');
    div.addEventListener('click', closeMenu);
    document.body.appendChild(div);
    return div;
  }

  if (menuToggle && navMenu) {
    overlay = createOverlay();

    menuToggle.addEventListener('click', function () {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    var navLinks = navMenu.querySelectorAll('a');
    Array.prototype.forEach.call(navLinks, function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* ===================================================================
     Scroll Spy
     =================================================================== */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');

  function activateNavLink(id) {
    Array.prototype.forEach.call(navAnchors, function (a) {
      a.classList.remove('active');
    });
    var match = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (match) {
      match.classList.add('active');
    }
  }

  if (sections.length && navAnchors.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          activateNavLink(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });

    Array.prototype.forEach.call(sections, function (section) {
      spyObserver.observe(section);
    });
  }

  /* ===================================================================
     Navbar Scroll Background
     =================================================================== */
  var navbar = document.querySelector('.navbar');

  function onScroll() {
    if (navbar) {
      var scrolled = window.scrollY > 10;
      navbar.classList.toggle('scrolled', scrolled);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ===================================================================
     Scroll-to-Top
     =================================================================== */
  var scrollTopBtn = document.getElementById('scroll-top');

  if (scrollTopBtn) {
    var scrollTopObserver = new IntersectionObserver(function (entries) {
      scrollTopBtn.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0 });

    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;pointer-events:none';
    document.body.prepend(sentinel);
    scrollTopObserver.observe(sentinel);
  }

  /* ===================================================================
     Smooth Scroll
     =================================================================== */
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    var href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });

  /* ===================================================================
     Scroll Reveal
     =================================================================== */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    var revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    Array.prototype.forEach.call(revealElements, function (el) {
      revealObserver.observe(el);
    });
  } else {
    var staticReveal = document.querySelectorAll('.reveal, .reveal-stagger');
    Array.prototype.forEach.call(staticReveal, function (el) {
      el.classList.add('revealed');
    });
  }

})();
