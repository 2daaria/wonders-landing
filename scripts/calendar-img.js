const departureCalendar = document.querySelector('#departure-date');
const arrivalCalendar = document.querySelector('#return-date');
const calendarDeparture = document.querySelector('#calendar-img');
const calendarArrival = document.querySelector('#calendar-img2');

// Функция, чтобы очистить содержимое
function closeCalendar(event) {
    const calendarImg1 = document.querySelector('#calendar-img img');
    const calendarImg2 = document.querySelector('#calendar-img2 img');

    // Если клик был не на изображении и не по кнопкам, то скрываем картинку
    if (
        !calendarImg1?.contains(event.target) &&
        !calendarImg2?.contains(event.target) &&
        !departureCalendar.contains(event.target) &&
        !arrivalCalendar.contains(event.target)
    ) {
        calendarDeparture.innerHTML = '';
        calendarArrival.innerHTML = '';
    }
}

// Показываем картинки
departureCalendar.addEventListener('click', () => {
    calendarDeparture.innerHTML = '<img class="calendar-img" src="/assets/images/date-picker.svg" alt="">';
})

arrivalCalendar.addEventListener('click', () => {
    calendarArrival.innerHTML = '<img class="calendar-img" src="/assets/images/date-picker.svg" alt="">';
})

//Глобальный обработчик
document.addEventListener('click', closeCalendar);