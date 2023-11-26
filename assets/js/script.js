const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
document.addEventListener("scroll", (event) => {
        if (document.documentElement.scrollTop > (screenHeight - document.documentElement.scrollTop / 3.5)) {
            document.querySelector(".menu-items").classList.add("menu-items-scroll");
            document.querySelector(".navigation-desktop").classList.add("navigation-desktop-scroll");
        } else {
            document.querySelector(".menu-items").classList.remove("menu-items-scroll");
            document.querySelector(".navigation-desktop").classList.remove("navigation-desktop-scroll");
        }
});