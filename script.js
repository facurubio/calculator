let A = "";
let B = "";
let C = "";
let flag = false;

function sum(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
    if (parseFloat(num2) === 0) {
        return null;
    }
    return parseFloat(num1) / parseFloat(num2);
}

function operate(num1, num2, operation) {
    switch (operation) {
        case "+":
            return sum(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

console.log(operate(10, 5, "+")); // Output: 15
console.log(operate(10, 5, "-")); // Output: 5
console.log(operate(10, 5, "*")); // Output: 50
console.log(operate(10, 5, "/")); // Output: 2
console.log(operate(10, 0, "/")); // Output: null
