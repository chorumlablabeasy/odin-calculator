const numberButtons = document.querySelectorAll(".number")

const displayElement = document.querySelector(".display")

const operatorButtons = document.querySelectorAll(".operator")

const resultButton = document.querySelector(".result")

const clearButton = document.querySelector(".clear")

let num1

let num2

let operator

let shouldReset = false

numberButtons.forEach(button => button.addEventListener("click", event => {
    if (shouldReset) {
        resetCalculator()
    }
    displayElement.textContent += event.target.textContent
    }))

operatorButtons.forEach(button => button.addEventListener("click", event => {
    if (displayElement.textContent === "") return
    if (shouldReset) {
            num1 = Number(displayElement.textContent)
            shouldReset = false
            displayElement.textContent = ""
    } else if (num1 === undefined) {
            num1 = Number(displayElement.textContent)
            displayElement.textContent = ""
    }
    operator = event.target.textContent
    }))

resultButton.addEventListener("click", () => {
    if (!operator || displayElement.textContent === "") return
    num2 = Number(displayElement.textContent)
    displayElement.textContent = operate(operator, num1, num2)
    num1 = Number(displayElement.textContent)
    num2 = undefined
    operator = undefined
    shouldReset = true
    })

clearButton.addEventListener("click", () => resetCalculator())

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
    if (num2 === 0) {
        return "Nice Try :P"
    }
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

function resetCalculator() {
    num1 = undefined
    num2 = undefined
    operator = undefined
    shouldReset = false
    displayElement.textContent = ""
}