// Favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Erastus HS";
    $("#favicon").attr("href", "assets/img/foto/logo.png");
  } else {
    document.title = "Welcome to My Portfolio";
    $("#favicon").attr("href", "assets/img/foto/favicon.png");
  }
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

//script toggle navbar aktif
$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
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

// smooth scrolling
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 70,
    },
    500,
    "linear"
  );
});

// typed js vanilla
let dataTyping = {
  target: "typing-text",
  text: '["frontend development", "web development"]',
  delay: "1000",
};

class textType {
  constructor(el, text, delay) {
    this.text = text;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(delay, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
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

    let that = this;
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

    setTimeout(function () {
      that.tick();
    }, timing);
  }
}

window.onload = function () {
  let el = document.getElementsByClassName(dataTyping.target);
  for (let i = 0; i < el.length; i++) {
    if (dataTyping.text) {
      new textType(el[i], JSON.parse(dataTyping.text), dataTyping.delay);
    }
  }
};

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
