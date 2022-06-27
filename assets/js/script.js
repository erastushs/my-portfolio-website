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
    let offset = sec.offsetTop - 150;
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
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500,
    "linear"
  );
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["frontend development", "web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// Journey Tabs
let eduBtn = document.querySelector(".edu-btn"),
  workBtn = document.querySelector(".work-btn");

eduBtn.addEventListener("click", function () {
  eduBtn.classList.add("active");
  workBtn.classList.remove("active");
  document.querySelector(".edu-space").classList.remove("hidden");
  document.querySelector(".work-space").classList.add("hidden");
});

workBtn.addEventListener("click", function () {
  workBtn.classList.add("active");
  eduBtn.classList.remove("active");
  document.querySelector(".work-space").classList.remove("hidden");
  document.querySelector(".edu-space").classList.add("hidden");
});

let offset = 0;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset;
  if (st > offset) {
    document.querySelector(".fa-arrow-up").classList.add("active");
  } else {
    document.querySelector(".fa-arrow-up").classList.remove("active");
  }
});
