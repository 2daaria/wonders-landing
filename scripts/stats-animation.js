const statsValues = document.querySelectorAll(".num");
let interval = 5000;

statsValues.forEach((value) => {
    let startValue = 0;
    let endValue = parseFloat(value.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        value.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration)
})
