const minusBtn = document.querySelector('#passenger-minus');
const plusBtn = document.querySelector('#passenger-plus');
const counterDisplay = document.querySelector('#counter-display');

let count = parseInt(counterDisplay.textContent);

function updateCounterDisplay() {
    counterDisplay.innerText = count;
}

plusBtn.addEventListener('click', () => {
    if (count < 12)
    count++
    updateCounterDisplay()
})

minusBtn.addEventListener('click', () => {
    if (count > 1) {
        count--
        updateCounterDisplay()
    }
})