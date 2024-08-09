let display = document.getElementById('display');
let currentOperand = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand || '0';
}

function chooseOperation(op) {
    if (currentOperand === '' && op === '-') {
        currentOperand = '-';
        updateDisplay();
        return;
    }
    if (currentOperand === '' || currentOperand === '-') return;
    currentOperand += ` ${op} `;
    updateDisplay();
}

function compute() {
    try {
        currentOperand = eval(currentOperand).toString();
    } catch (e) {
        currentOperand = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    updateDisplay();
}
