function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}
let num1 = "";
let num2 = "";
let operator = "";
const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "." && num1 === "") {
      num1 = "0.";
      div.textContent = num1;
    } else if (
      (e.target.textContent === "0" && num1 !== "") ||
      e.target.textContent === "1" ||
      e.target.textContent === "2" ||
      e.target.textContent === "3" ||
      e.target.textContent === "4" ||
      e.target.textContent === "5" ||
      e.target.textContent === "6" ||
      e.target.textContent === "7" ||
      e.target.textContent === "8" ||
      e.target.textContent === "9" ||
      (e.target.textContent === "." && !num1.includes("."))
    ) {
      num1 += e.target.textContent;
      div.textContent = num1;
    }
  });
});
