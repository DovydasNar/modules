import {
  display,
  numberButtons,
  clearButton,
  equalsButton,
  operatorButtons,
} from "./domElements.js";
import { add, subtract, multi, divide } from "./mathOperations.js";
import { reset, setOperator, calculate } from "./calculator.js";

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.textContent;

    if (display.textContent === "0") {
      display.textContent = buttonText;
    } else {
      display.textContent += buttonText;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const operator = event.target.textContent;
    setOperator(operator);
  });
});

clearButton.addEventListener("click", reset);

equalsButton.addEventListener("click", calculate);
