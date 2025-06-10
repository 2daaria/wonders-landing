const burgerOpenerBtn = document.querySelector('#burger-opener');
const burgerIcon = document.querySelector('#burger-icon');
const burger = document.querySelector('#burger');
const linksWrapperInBurger = document.querySelector('#burger ul');

let opened = false;

function openBurger() {
    burgerIcon.setAttribute("src", "assets/icons/burger-close.svg");
    burger.classList.remove("burger-closed")
    burger.classList.add("burger-opened");
    document.body.classList.add("no_scroll");

}

function closeBurger() {
    burgerIcon.setAttribute("src", "assets/icons/burger-open.svg");
    burger.classList.add("burger-closed");
    burger.classList.remove("burger-opened");
    document.body.classList.remove("no_scroll");
    opened = false; //это нужно, чтоб потом меню с первого клика открывалось
}

burgerOpenerBtn.addEventListener('click', () => {
    opened = !opened;
    if (opened) openBurger()
    else closeBurger()
})

linksWrapperInBurger.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger__item-link')) {
        closeBurger()
    }
})