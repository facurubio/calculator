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

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", function (event) {
    const button = event.target;

    if (button.classList.contains("digit") ) {
        // Handle digit button click
        if (C === "") {
            A += button.dataset.value;
            display.value = A;
        } else {
            B += button.dataset.value;
            display.value = B;
        }
    }

    if (button.classList.contains("operator")) {
         if( B !== "" && C !== "") {
            A = operate(A, B, C).toString();
            B = "";

            display.value = A;
        }
        C = button.dataset.value;
    }

    if (button.classList.contains("result")) {
        if (A !== "" && B !== "" && C !== "") {
            A = operate(A, B, C).toString();
            B = "";
            C = "";
            display.value = A;
        }
    }
                    
});