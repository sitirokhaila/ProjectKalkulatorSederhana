const calcScreen = document.querySelector('.calc-screen');
const updateScreen = (number) => {
    calcScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber (event.target.value);
        updateScreen (currentNumber);
    });
});

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
};

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator (event.target.value);
        updateScreen(calculationOperator);
    })
});

const equalSign = document.querySelector('.equal-sign');
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            return;
    };
    currentNumber = result;
    calculationOperator = '';
};

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

const clrBtn = document.querySelector('.all-clear');
clrBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal');
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener('click', (event) => {
    inputDecimal (event.target.value);
    updateScreen (currentNumber);
});

inputPercentage = (percentage) => {
    if(currentNumber.includes('&')) {
        return;
    }
    currentNumber = currentNumber / 100;
};

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value);
    updateScreen(currentNumber);
});