const minusBtn = document.querySelector('#passenger-minus');
const plusBtn = document.querySelector('#passenger-plus');
const counterDisplay = document.querySelector('#counter-display');

let count = parseInt(counterDisplay.textContent) || 0;

function updateCounterDisplay() {
    counterDisplay.innerText = count;
}

plusBtn.addEventListener('click', () => {
    count++
    updateCounterDisplay()
})

minusBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
        updateCounterDisplay()
    }
})