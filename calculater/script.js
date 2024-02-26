const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn =document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const number1Element = document.querySelector("#number1");
const number2Element = document.querySelector("#number2");

const resultElement = document.querySelector("#result");

function calculate(operation) {
    const num1 = Number(number1Element.value);
    const num2 = Number(number2Element.value);

    if (number1Element.value === "" || number2Element.value=== "") {
        resultElement.textContent = "Please enter numbers";
        
    }else if(isNaN(num1) || isNaN(num2)){
        resultElement.textContent= "Please enter valid numbers";

    }else{
        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "subtract":
                result = num1 - num2;
                break;

            case "multiply":
                    result = num1 * num2;
                    break;  

            case "divide":
                if (num2 === 0) {
                    result = "Can't divide 0";
                }else{
                    result = num1 / num2;
                }   
                 break;
        
            default:
                result = "";
                break;
        }
        resultElement.textContent = result;
        clearInputs();
    }
}

function clearInputs() {
    number1Element.value  = "";
    number2Element.value = "";
}

addBtn.addEventListener("click", (e) => {
    calculate("add");
})

subtractBtn.addEventListener("click", (e) => {
    calculate("subtract");
})

multiplyBtn.addEventListener("click", (e) => {
    calculate("multiply");
})

divideBtn.addEventListener("click", (e) => {
    calculate("divide");
})