// Favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Erastus HS";
    const favicon = document.getElementById("favicon");
    if (favicon) favicon.setAttribute("href", "assets/img/foto/logo.png");
  } else {
    document.title = "Welcome to My Portfolio";
    const favicon = document.getElementById("favicon");
    if (favicon) favicon.setAttribute("href", "assets/img/foto/favicon.png");
  }
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

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
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("ul li a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("ul li a[href*=" + id + "]").classList.add("active");
      });
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
let offset = 0;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset;
  if (st > offset) {
    document.querySelector(".fa-arrow-up").classList.add("active");
  } else {
    document.querySelector(".fa-arrow-up").classList.remove("active");
  }
});

// script preloader
const preload = document.querySelector("#preloader");
const preloadDelay = 300;
const body = document.querySelector("body");

window.addEventListener("load", function () {
  setTimeout(() => {
    preload.classList.add("hidden");
    body.classList.remove("hidden");
  }, preloadDelay);
});
