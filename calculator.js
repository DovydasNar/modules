import { add, divide, multi, subtract } from "./mathOperations.js";
import { display } from "./domElements.js";

let firstNum = null;
let secondNum = null;
let currentOperator = null;

export function reset() {
  firstNum = null;
  secondNum = null;
  currentOperator = null;
  display.textContent = "0";
}

export function setOperator(operator) {
  if (firstNum === null) {
    firstNum = parseFloat(display.textContent);
  }
  currentOperator = operator;
  display.textContent = "0";
}

export function calculate() {
  if (firstNum !== null && currentOperator !== null) {
    secondNum = parseFloat(display.textContent);

    let result;
    if (currentOperator === "+") {
      result = add(firstNum, secondNum);
    } else if (currentOperator === "-") {
      result = subtract(firstNum, secondNum);
    } else if (currentOperator === "*") {
      result = multi(firstNum, secondNum);
    } else if (currentOperator === "/") {
      result = divide(firstNum, secondNum);
    }

    display.textContent = result;
    firstNum = null;
    secondNum = null;
    currentOperator = null;
  }
}
