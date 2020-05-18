const btnMinus = document.querySelector('.btnMinus');
const btnAdd = document.querySelector('.btnAdd');
let counter = document.getElementById('counter');

btnMinus.addEventListener('click', function () {
    handleCounter('-');
});

btnAdd.addEventListener('click', function () {
    handleCounter('+');
});

function handleCounter(operator) {
    let valueCount = parseInt(counter.textContent);

    if (operator === '-') {
        if (valueCount <= 1) {
            return;
        }
        valueCount--;
    } else if (operator === '+') {
        valueCount++;
    }
    counter.textContent = valueCount;
}
