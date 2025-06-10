const header = document.querySelector("#header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.paddingBlock = '10px';
    } else {
        header.style.paddingBlock = '32.5px';
    }
})