document.getElementById('calculateButton').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        resultDiv.style.color = 'red';
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            if (number2 === 0) {
                resultDiv.textContent = 'Error: Division by zero!';
                resultDiv.style.color = 'red';
                return;
            }
            result = divide(number1, number2);
            break;
        default:
            resultDiv.textContent = 'Invalid operator selected.';
            resultDiv.style.color = 'red';
            return;
    }

    resultDiv.textContent = `Result: ${result.toFixed(2)}`;
    resultDiv.style.color = '#333';
});

// Operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}