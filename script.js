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

function evaluate(a, b, op){
    let result = operate(a, b, op);
    if (result === null){
        return null;
    }
    return Math.round(result * 100) / 100;
};

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");


buttons.addEventListener("click", function (event) {
    const button = event.target;
    button.blur();
    
    if (button.classList.contains("digit") ) {
        // Handle digit button click
        if (flag) {
            A = "";
            flag = false;
        }
        if (C === "" ) {
            if (button.dataset.value === "." && A.includes(".")) return;
            A += button.dataset.value;
            display.value = A;
        } else {
            if(button.dataset.value === "." && B.includes(".")) return;
            B += button.dataset.value;
            display.value = B;
        }

    }

    if (button.classList.contains("operator")) {
        if( B !== "" && C !== "") {
            let result = evaluate(A,B,C);
            if(result === null){
                display.value = "Error";
                A = "";
                B = "";
                C = "";
                flag = false; 
                return
            }else{
                A = result.toString();
                B = "";
                display.value = A;
            }
        }
        if (A !== "") {
            flag = false;
            C = button.dataset.value;
        }
    }

    if (button.classList.contains("result")) {
        if (A !== "" && B !== "" && C !== "") {
            let result = evaluate(A,B,C);
            if(result === null){
                display.value = "Error";
                A = "";
                B = "";
                C = "";
                flag = false;
            } else{
                A = result.toString();
                B = "";
                C = "";
                flag = true;
                display.value = A;
            }

        }
    }

    if (button.classList.contains("clear")) {
        A = "";
        B = "";
        C = "";
        flag = false;
        display.value = "";
    }      

    if (button.classList.contains("delete")) {
    if (C === "") {
        A = A.slice(0, -1);
        flag = false;
        display.value = A;
    } else {
        B = B.slice(0, -1);
        display.value = B;
    }
}
});


document.addEventListener('keydown', (event) =>{
    const elements = {
        Enter: '=',
        Backspace: 'delete',
    };
    const value = elements[event.key] ?? event.key;
    const button = document.querySelector(`[data-value="${value}"]`);
    if(button === null) return;
    button.click();
});

