function calculate(operation) {
    var inputA = document.getElementById('inputA').value;
    var inputB = document.getElementById('inputB').value;

    
    inputA = parseFloat(inputA);
    inputB = parseFloat(inputB);

    if (isNaN(inputA) || isNaN(inputB)) {
        alert('Please enter valid numbers!');
        return;
    }

    var result;
    switch(operation) {
        case 'sum':
            result = inputA + inputB;
            break;
        case 'subtract':
            result = inputA - inputB;
            break;
        case 'multiply':
            result = inputA * inputB;
            break;
        case 'divide':
            if (inputB === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = inputA / inputB;
            break;
        default:
            result = 'Invalid operation';
    }

    
    document.getElementById('result').innerText = 'Result: ' + result;
}

function resetInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerText = '';
}