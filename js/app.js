const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const navigationLinks = document.getElementsByClassName("nav_links")[0];
const dropdownWorks = document.getElementById("dropdown_works");
const dropdownList = document.getElementById("dropdown_list");

hamburgerButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");
});

dropdownWorks.addEventListener("click", () => {
  dropdownList.classList.toggle("active");
});
