const numberButtons = document.querySelectorAll(".number")

const displayElement = document.querySelector(".display")

const operatorButtons = document.querySelectorAll(".operator")

const resultButton = document.querySelector(".result")

const clearButton = document.querySelector(".clear")

let num1

let num2

let operator

numberButtons.forEach(button => button.addEventListener("click", event => displayElement.textContent += event.target.textContent))

operatorButtons.forEach(button => button.addEventListener("click", event => {
    operator = event.target.textContent
    num1 = Number(displayElement.textContent)
    displayElement.textContent = ""
}))

resultButton.addEventListener("click", () => {
    num2 = Number(displayElement.textContent)
    displayElement.textContent = operate(operator, num1, num2)
})

clearButton.addEventListener("click", () => {
    num1 = 0
    num2 = 0
    operator = ""
    displayElement.textContent = ""
})

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2) 
    } else if (operator === "/") {
        return divide(num1, num2)
    }
}