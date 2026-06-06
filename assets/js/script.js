// Project data
var projects = [
  {
    title: "LuxyHub",
    description: "Your ultimate destination for Roblox scripts, game tools, and community resources.",
    image: "/assets/img/Project/luxyhub.png",
    alt: "luxyhub",
    techStack: [
      { icon: "react", name: "Next.js", brand: true },
      { icon: "js-square", name: "TypeScript", brand: true },
      { icon: "css3-alt", name: "Tailwind", brand: true },
      { icon: "check-circle", name: "ESLint", brand: false }
    ],
    demoUrl: "http://luxyhub.space",
    githubUrl: "https://github.com/erastushs/luxy-hub",
    featured: true
  },
  {
    title: "BloxAtlas",
    description: "Explore Roblox Through Data",
    image: "/assets/img/Project/bloxatlas.png",
    alt: "bloxatlas",
    techStack: [
      { icon: "react", name: "Next.js", brand: true },
      { icon: "js-square", name: "TypeScript", brand: true },
      { icon: "css3-alt", name: "Tailwind", brand: true },
      { icon: "check-circle", name: "ESLint", brand: false }
    ],
    demoUrl: "http://bloxatlas.vercel.app",
    githubUrl: "https://github.com/erastushs/bloxatlas",
    featured: true
  },
  {
    title: "Discord Bot",
    description: "Personal discord bot for my server discord",
    image: "/assets/img/Project/discord-thumb.jpg",
    alt: "discord",
    techStack: [
      { icon: "node-js", name: "Node.js", brand: true }
    ],
    demoUrl: "http://discord.io/HoakFamily",
    githubUrl: "https://github.com/erastushs/hoak-bot",
    featured: false
  },
  {
    title: "Website Juice you",
    description: "Just simple website for submission on dicoding",
    image: "/assets/img/Project/website-juice.jpg",
    alt: "JuiceYou-Project",
    techStack: [
      { icon: "html5", name: "HTML5", brand: true },
      { icon: "css3-alt", name: "CSS3", brand: true },
      { icon: "js-square", name: "JavaScript", brand: true }
    ],
    demoUrl: "https://juiceyoubeta.netlify.app/",
    githubUrl: "https://github.com/erastushs/website-juice",
    featured: true
  },
  {
    title: "Website My Bookshelfs",
    description: "Catalog and organize library or book collection on multiple virtual bookshelves",
    image: "/assets/img/Project/my-bookshelfs.jpg",
    alt: "my-bookshelfs-project",
    techStack: [
      { icon: "html5", name: "HTML5", brand: true },
      { icon: "css3-alt", name: "CSS3", brand: true },
      { icon: "js-square", name: "JavaScript", brand: true }
    ],
    demoUrl: "https://my-bookshelfs.netlify.app/",
    githubUrl: "https://github.com/erastushs/My-bookshelf",
    featured: true
  }
];

function renderProjects(container, projectList, iconPath) {
  if (!container) return;
  container.innerHTML = projectList.map(function (p) {
    var techHtml = p.techStack.map(function (t) {
      var cls = t.brand ? "icon icon-brand" : "icon";
      return '<span class="chip"><svg class="' + cls + '" aria-hidden="true"><use href="' + iconPath + '#' + t.icon + '"/></svg> ' + t.name + '</span>';
    }).join("");
    return '<div class="box">'
    + '<div class="box-img"><img draggable="false" src="' + p.image + '" alt="' + p.alt + '" /></div>'
    + '<div class="box-body">'
    + '<h3>' + p.title + '</h3>'
    + '<p class="desc-text">' + p.description + '</p>'
    + '<div class="tech-chips">' + techHtml + '</div>'
    + '<div class="btns">'
    + '<a href="' + p.demoUrl + '" class="btn view" target="_blank"><svg class="icon" aria-hidden="true"><use href="' + iconPath + '#eye"/></svg> View</a>'
    + '<a href="' + p.githubUrl + '" class="btn code" target="_blank">Code <svg class="icon" aria-hidden="true"><use href="' + iconPath + '#code"/></svg></a>'
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

// Favicon
document.addEventListener("visibilitychange", function () {
  var isProjectPage = window.location.pathname.indexOf("/Project/") !== -1;
  var favicon = document.getElementById("favicon");
  if (document.visibilityState === "visible") {
    document.title = isProjectPage ? "Project | Portfolio Erastus HS" : "Portfolio | Erastus HS";
    if (favicon) favicon.setAttribute("href", isProjectPage ? "../assets/img/foto/logo.png" : "assets/img/foto/logo.png");
  } else {
    document.title = "Welcome to My Portfolio";
    if (favicon) favicon.setAttribute("href", isProjectPage ? "../assets/img/foto/favicon.png" : "assets/img/foto/favicon.png");
  }
});

// script hamburger untuk mobile responsive
var menuToggle = document.querySelector(".menu-toggle input");
var nav = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });
}

//script toggle navbar aktif
// toggle active state for nav links (native)
document.querySelectorAll("nav ul li").forEach((li) => {
  li.addEventListener("click", function () {
    // remove .active from all anchors in the same list
    const parent = li.parentElement;
    if (!parent) return;
    parent.querySelectorAll("li a").forEach((a) => a.classList.remove("active"));
    const link = li.querySelector("a");
    if (link) link.classList.add("active");
  });
});

// scroll spy
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("ul li a");

window.onscroll = function () {
  sections.forEach(function (sec) {
    var top = window.scrollY;
    var offset = sec.offsetTop - 250;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (links) {
        links.classList.remove("active");
      });
      var match = document.querySelector("ul li a[href*=" + id + "]");
      if (match) match.classList.add("active");
    }
  });
};

// smooth scrolling (native)
document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 70; // match previous behavior
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// typed js vanilla
(function () {
  let dataTyping = {
    target: "typing-text",
    text: '["frontend development", "web development"]',
    delay: "1000",
  };

  class TextType {
    constructor(el, text, delay) {
      this.text = text;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(delay, 10) || 2000;
      this.txt = "";
      this.isDeleting = false;
      this.tick();
    }
    tick() {
      let i = this.loopNum % this.text.length;
      let fullTxt = this.text[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerText = this.txt;

      let timing = Math.floor(200 - Math.random() * 100);

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

      setTimeout(() => this.tick(), timing);
    }
  }

  window.addEventListener("load", function () {
    let words = dataTyping.text ? JSON.parse(dataTyping.text) : null;
    if (!words) return;
    let el = document.getElementsByClassName(dataTyping.target);
    for (let i = 0; i < el.length; i++) {
      new TextType(el[i], words, dataTyping.delay);
    }
  });
})();

// scroll up pop up
var scrollTopBtn = document.querySelector(".scroll-top");
if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });
}

// script preloader
var preload = document.querySelector("#preloader");
if (preload) {
  var preloadDelay = 300;
  var body = document.querySelector("body");

  window.addEventListener("load", function () {
    setTimeout(function () {
      preload.classList.add("hidden");
      body.classList.remove("hidden");
    }, preloadDelay);
  });
}
