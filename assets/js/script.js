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

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["frontend development", "web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
