const headerBurgerMenuIcon = document.querySelector(".burger");
const burgerMenu = document.querySelector(".menu");
const close = document.querySelector('.burger__close');

function clickBurgerMenu() {
    headerBurgerMenuIcon.addEventListener("click", () => {
        document.querySelector(".menu").classList.add("active")
    })

    close.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
            headerBurgerMenuIcon.classList.remove("active");
    });
   
};

clickBurgerMenu();
