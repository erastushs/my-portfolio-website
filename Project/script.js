// Favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Project | Portfolio Erastus HS";
    const favicon = document.getElementById("favicon");
    if (favicon) favicon.setAttribute("href", "../assets/img/foto/logo.png");
  } else {
    document.title = "Welcome to My Portfolio";
    const favicon = document.getElementById("favicon");
    if (favicon) favicon.setAttribute("href", "../assets/img/foto/favicon.png");
  }
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
