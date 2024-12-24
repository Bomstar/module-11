const navberToggol = document.querySelector(".nav-toggol-icon");
const navberIcon = document.querySelector(".nav-toggol-icon i")
let navList = document.querySelector(".nav-list-mobile");


navberToggol.addEventListener("click", () => {
    navList.classList.toggle("nav-open")
    const isOpen = navList.classList.contains("nav-open")

    navberIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
})