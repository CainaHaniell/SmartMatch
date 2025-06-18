const hamburger = document.querySelector(".hamburguer");
const menuLinks = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});
