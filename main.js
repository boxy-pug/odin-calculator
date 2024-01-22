const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector("#calculator-container");
const screen = calculator.querySelector("#screen");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const screenValue = screen.textContent;
  const type = key.dataset.type;
  const { previousKeyType } = calculator.dataset;

  // If it's a number:
  if (type === "number" || type === "comma") {
    if (screenValue === "0" || previousKeyType === "operator") {
      screen.textContent = key.textContent === "." ? "0." : keyValue;
    } else if (key.textContent === "." && screenValue.includes(".")) {
      return;
      screen.textContent = screenValue + keyValue;
    } else if (previousKeyType === "operator") {
      screen.textContent = keyValue;
    } else {
      screen.textContent = screenValue + keyValue;
    }
  }

  // If it's an operator:
  if (type === "operator") {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => {
      el.dataset.state = "";
    });
    key.dataset.state = "selected";
    calculator.dataset.firstNumber = screenValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === "equal") {
    //perform calc
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = screenValue;
    console.log(firstNumber, operator, secondNumber);

    let result = "";
    if (operator === "plus") result = firstNumber + secondNumber;
    if (operator === "minus") result = firstNumber - secondNumber;
    if (operator === "divide") result = firstNumber / secondNumber;
    if (operator === "times") result = firstNumber * secondNumber;
    screen.textContent = calculate(firstNumber, operator, secondNumber);
  }

  if (type === "clear") {
    screen.textContent = "";
  }

  calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  let result = "0";
  if (operator === "plus") result = firstNumber + secondNumber;
  if (operator === "minus") result = firstNumber - secondNumber;
  if (operator === "divide") result = firstNumber / secondNumber;
  if (operator === "times") result = firstNumber * secondNumber;
  return result;
}
