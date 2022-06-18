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
