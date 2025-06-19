const dateContainer = document.querySelector('#copyright-date');

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

dateContainer.innerText = currentYear;