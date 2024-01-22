// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalsButtons = document.querySelector("[data-equals]");
// const previousOperandText = document.querySelector("[data-previous-operand]");
// const currentOperandText = document.querySelector("[data-current-operand]");

// function add() {}

const keys = document.querySelector("#calculator-container");
const screen = document.querySelector("#screen");

keys.addEventListener("click", (event) => {
  //   console.log(event.target);
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const screenValue = screen.textContent;
  console.log(screenValue);

  if (screenValue === "0") {
    screen.textContent = keyValue;
  } else {
    screen.textContent = screenValue + keyValue;
  }
});
