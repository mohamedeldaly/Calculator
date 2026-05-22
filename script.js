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
function buttonLogic(e) {
  if (operator === "") {
    if (e === "." && num1 === "") {
      num1 = "0.";
      div.textContent = num1;
    } else if (
      (e === "0" && num1 !== "") ||
      e === "1" ||
      e === "2" ||
      e === "3" ||
      e === "4" ||
      e === "5" ||
      e === "6" ||
      e === "7" ||
      e === "8" ||
      e === "9" ||
      (e === "." && !num1.includes("."))
    ) {
      num1 += e;
      div.textContent = num1;
    } else if (e === "clear") {
      num1 = "";
      div.textContent = "0";
    } else if (e === "+" || e === "-" || e === "*" || e === "/") {
      operator = e;
    } else if (e === "Backspace" && num1.length > 1) {
      num1 = num1.slice(0, -1);
      div.textContent = num1;
    } else if (e === "Backspace" && num1.length === 1) {
      num1 = "";
      div.textContent = "0";
    }
  } else if (operator !== "") {
    if (e === "." && num2 === "") {
      num2 = "0.";
      div.textContent = num2;
    } else if (
      (e === "0" && num2 !== "") ||
      e === "1" ||
      e === "2" ||
      e === "3" ||
      e === "4" ||
      e === "5" ||
      e === "6" ||
      e === "7" ||
      e === "8" ||
      e === "9" ||
      (e === "." && !num2.includes("."))
    ) {
      num2 += e;
      div.textContent = num2;
    } else if (e === "clear" && num2 !== "") {
      num2 = "";
      div.textContent = "0";
    } else if (e === "clear" && num2 === "") {
      num2 = "";
      num1 = "";
      operator = "";
      div.textContent = "0";
    } else if (e === "Backspace" && num2.length > 1) {
      num2 = num2.slice(0, -1);
      div.textContent = num2;
    } else if (e === "Backspace" && num2.length === 1) {
      num2 = "";
      div.textContent = "0";
    }
  }
  if (e === "=" && num1 !== "" && num2 !== "" && operator !== "") {
    div.textContent = operate(operator, Number(num1), Number(num2));
    num1 = "";
    num2 = "";
    operator = "";
  }
  if (e === "+" || e === "-" || e === "*" || e === "/") {
    if (num1 !== "" && num2 !== "" && operator !== "") {
      div.textContent = operate(operator, Number(num1), Number(num2));
      num1 = div.textContent;
      num2 = "";
      operator = e;
    }
  }
  console.log(num1);
  console.log(num2);
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonLogic(e.target.textContent);
  });
});
document.addEventListener("keydown", (e) => {
  buttonLogic(e.key);
});
