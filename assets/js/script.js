const screenHeight = window.innerHeight;
const projects = document.querySelectorAll(".projects article");
const projectsFilters = document.querySelectorAll(".projects-filters li");
document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > (screenHeight - document.documentElement.scrollTop / 3.5)) {
            document.querySelector(".menu-items").classList.add("menu-items-scroll");
            document.querySelector(".navigation-desktop").classList.add("navigation-desktop-scroll");
        } else {
            document.querySelector(".menu-items").classList.remove("menu-items-scroll");
            document.querySelector(".navigation-desktop").classList.remove("navigation-desktop-scroll");
        }
});
for (let i = 0; i < projectsFilters.length; i++) {
    projectsFilters[i].addEventListener("click", (event) => {
        let filterType = event.currentTarget.dataset.filterType;
        for (let j = 0; j < projects.length; j++) {
            projects[j].classList.remove("hidden");
        }
        if (filterType !== undefined) {
            for (let j = 0; j < projects.length; j++) {
                if (projects[j].dataset.projectCategory !== filterType) {
                    projects[j].classList.add("hidden");
                }
            }
        }

    });
}