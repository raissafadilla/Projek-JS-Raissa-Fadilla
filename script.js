let prevNumber = ""
let calculationOperator = ""
let currentNumber = ""
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number
};

const inputNumber = (number) => {
   if (currentNumber === "0") {
        currentNumber = number
   } else {
        currentNumber += number
   }
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
});

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
});

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
};

const equalSign = document.querySelector (".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
});

equalSign.addEventListener("click", () => {
    console.log("equal button is pressed")
});

const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber =  result
    calculationOperator = ""
};

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = ""
};

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
});

const decimal = document.querySelector(".decimal")

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
});



