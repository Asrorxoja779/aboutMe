const menuBtn = document.querySelector(".header-list__btn");
const headerLinks = document.querySelector(".header-section__links");

menuBtn.addEventListener("click", function () {
    headerLinks.classList.toggle("active");
});