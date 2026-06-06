'use strict';

// ========================= Constants =========================
var SCROLL_OFFSET_PX = 250;
var PRELOADER_DELAY_MS = 300;
var TYPING_PERIOD_MS = 1000;

// ========================= Project Data =========================
var projects = [
  {
    title: "LuxyHub",
    description: "Your ultimate destination for Roblox scripts, game tools, and community resources.",
    image: "/assets/img/Project/luxyhub.webp",
    alt: "luxyhub",
    techStack: [
      { icon: "react", name: "Next.js", brand: true },
      { icon: "js-square", name: "TypeScript", brand: true },
      { icon: "css3-alt", name: "Tailwind", brand: true },
      { icon: "check-circle", name: "ESLint", brand: false }
    ],
    demoUrl: "http://luxyhub.space",
    githubUrl: "https://github.com/erastushs/luxy-hub",
    width: 1918,
    height: 895,
    featured: true
  },
  {
    title: "BloxAtlas",
    description: "Explore Roblox Through Data",
    image: "/assets/img/Project/bloxatlas.webp",
    alt: "bloxatlas",
    techStack: [
      { icon: "react", name: "Next.js", brand: true },
      { icon: "js-square", name: "TypeScript", brand: true },
      { icon: "css3-alt", name: "Tailwind", brand: true },
      { icon: "check-circle", name: "ESLint", brand: false }
    ],
    demoUrl: "http://bloxatlas.vercel.app",
    githubUrl: "https://github.com/erastushs/bloxatlas",
    width: 1918,
    height: 895,
    featured: true
  },
  {
    title: "Discord Bot",
    description: "Personal discord bot for my server discord",
    image: "/assets/img/Project/discord-thumb.webp",
    alt: "discord",
    techStack: [
      { icon: "node-js", name: "Node.js", brand: true }
    ],
    demoUrl: "http://discord.io/HoakFamily",
    githubUrl: "https://github.com/erastushs/hoak-bot",
    width: 682,
    height: 384,
    featured: false
  },
  {
    title: "Website Juice you",
    description: "Just simple website for submission on dicoding",
    image: "/assets/img/Project/website-juice.webp",
    alt: "JuiceYou-Project",
    techStack: [
      { icon: "html5", name: "HTML5", brand: true },
      { icon: "css3-alt", name: "CSS3", brand: true },
      { icon: "js-square", name: "JavaScript", brand: true }
    ],
    demoUrl: "https://juiceyoubeta.netlify.app/",
    githubUrl: "https://github.com/erastushs/website-juice",
    width: 1920,
    height: 1080,
    featured: true
  },
  {
    title: "Website My Bookshelfs",
    description: "Catalog and organize library or book collection on multiple virtual bookshelves",
    image: "/assets/img/Project/my-bookshelfs.webp",
    alt: "my-bookshelfs-project",
    techStack: [
      { icon: "html5", name: "HTML5", brand: true },
      { icon: "css3-alt", name: "CSS3", brand: true },
      { icon: "js-square", name: "JavaScript", brand: true }
    ],
    demoUrl: "https://my-bookshelfs.netlify.app/",
    githubUrl: "https://github.com/erastushs/My-bookshelf",
    width: 1920,
    height: 931,
    featured: true
  }
];

// ========================= Project Rendering =========================
function renderProjects(container, projectList, iconPath) {
  if (!container) return;
  container.innerHTML = projectList.map(function (p) {
    var techHtml = p.techStack.map(function (t) {
      var cls = t.brand ? "icon icon-brand" : "icon";
      return '<span class="chip"><svg class="' + cls + '" aria-hidden="true"><use href="' + iconPath + '#' + t.icon + '"/></svg> ' + t.name + '</span>';
    }).join("");
    var widthAttr = p.width ? ' width="' + p.width + '"' : '';
    var heightAttr = p.height ? ' height="' + p.height + '"' : '';
    return '<div class="box">'
    + '<div class="box-img"><img draggable="false" src="' + p.image + '" alt="' + p.alt + ' project screenshot"' + widthAttr + heightAttr + ' loading="lazy" decoding="async" /></div>'
    + '<div class="box-body">'
    + '<h3>' + p.title + '</h3>'
    + '<p class="desc-text">' + p.description + '</p>'
    + '<div class="tech-chips">' + techHtml + '</div>'
    + '<div class="btns">'
    + '<a href="' + p.demoUrl + '" class="btn view icon-hover" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="' + iconPath + '#eye"/></svg> View</a>'
    + '<a href="' + p.githubUrl + '" class="btn code icon-hover" target="_blank" rel="noopener noreferrer">Code <svg class="icon" aria-hidden="true"><use href="' + iconPath + '#code"/></svg></a>'
    + '</div></div></div>';
  }).join("");
}

function initProjects() {
  var container = document.getElementById("projectContainer");
  if (!container) return;
  var iconPath = container.getAttribute("data-icon-path") || "assets/icons.svg";
  var showAll = container.getAttribute("data-show-all") === "true";
  var list = showAll ? projects : projects.filter(function (p) { return p.featured; });
  renderProjects(container, list, iconPath);
}

document.addEventListener("DOMContentLoaded", initProjects);

// ========================= Favicon and Title Switcher =========================
(function () {
  var isProjectPage = window.location.pathname.indexOf("/Project/") !== -1;
  var favicon = document.getElementById("favicon");
  var defaultTitle = isProjectPage ? "Project | Portfolio Erastus HS" : "Erastus HS — Front-End Developer Portfolio";
  var awayTitle = "Welcome to My Portfolio";
  var defaultIcon = isProjectPage ? "../assets/img/foto/logo.png" : "assets/img/foto/logo.png";
  var awayIcon = isProjectPage ? "../assets/img/foto/favicon.png" : "assets/img/foto/favicon.png";

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = defaultTitle;
      if (favicon) favicon.setAttribute("href", defaultIcon);
    } else {
      document.title = awayTitle;
      if (favicon) favicon.setAttribute("href", awayIcon);
    }
  });
})();

// ========================= Navigation =========================
(function () {
  var menuToggle = document.querySelector(".menu-toggle input");
  var nav = document.querySelector("nav ul");
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
    var expanded = nav.classList.contains("slide");
    menuToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("slide")) {
      nav.classList.remove("slide");
      menuToggle.checked = false;
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  var navAnchors = nav.querySelectorAll("li");
  Array.prototype.forEach.call(navAnchors, function (li) {
    li.addEventListener("click", function () {
      var parent = li.parentElement;
      if (!parent) return;
      Array.prototype.forEach.call(parent.querySelectorAll("li a"), function (a) { a.classList.remove("active"); });
      var link = li.querySelector("a");
      if (link) link.classList.add("active");
    });
  });
})();

// ========================= Scroll Spy (Intersection Observer) =========================
(function () {
  var navLinks = document.querySelectorAll("nav ul li a");
  if (navLinks.length === 0) return;

  function activateLink(id) {
    Array.prototype.forEach.call(navLinks, function (link) { link.classList.remove("active"); });
    var match = document.querySelector('nav ul li a[href="#' + id + '"]');
    if (match) match.classList.add("active");
  }

  var sections = document.querySelectorAll("section[id]");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        activateLink(entry.target.id);
      }
    });
  }, {
    rootMargin: "-" + SCROLL_OFFSET_PX + "px 0px 0px 0px",
    threshold: 0
  });

  Array.prototype.forEach.call(sections, function (section) {
    observer.observe(section);
  });
})();

// ========================= Smooth Scrolling =========================
(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');
  Array.prototype.forEach.call(anchors, function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();

// ========================= Typing Effect =========================
(function () {
  var words = ["frontend development", "Next.js", "TypeScript", "web development"];

  function TextType(el, text, delay) {
    this.text = text;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(delay, 10) || TYPING_PERIOD_MS;
    this.txt = "";
    this.isDeleting = false;
    this.tick();
  }

  TextType.prototype.tick = function () {
    var i = this.loopNum % this.text.length;
    var fullTxt = this.text[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerText = this.txt;

    var timing = Math.floor(200 - Math.random() * 100);

    if (this.isDeleting) {
      timing /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      timing = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      timing = 500;
    }

    var self = this;
    setTimeout(function () { self.tick(); }, timing);
  };

  window.addEventListener("load", function () {
    var els = document.getElementsByClassName("typing-text");
    Array.prototype.forEach.call(els, function (el) {
      new TextType(el, words, TYPING_PERIOD_MS);
    });
  });
})();

// ========================= Scroll-to-Top (Intersection Observer) =========================
(function () {
  var scrollTopBtn = document.querySelector(".scroll-top");
  if (!scrollTopBtn) return;

  var sentinel = document.createElement("div");
  sentinel.style.position = "absolute";
  sentinel.style.top = "0";
  sentinel.style.height = "1px";
  sentinel.style.width = "1px";
  sentinel.style.pointerEvents = "none";
  document.body.prepend(sentinel);

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      scrollTopBtn.classList.remove("active");
    } else {
      scrollTopBtn.classList.add("active");
    }
  }, { threshold: 0 });

  observer.observe(sentinel);
})();

// ========================= Preloader =========================
(function () {
  var preload = document.getElementById("preloader");
  if (!preload) return;

  window.addEventListener("load", function () {
    setTimeout(function () {
      preload.classList.add("hidden");
      preload.setAttribute("aria-hidden", "true");
      document.body.classList.remove("hidden");
    }, PRELOADER_DELAY_MS);
  });
})();
