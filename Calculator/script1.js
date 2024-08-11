let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch(error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}