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
    if (operator === "") {
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
      } else if (e.target.textContent === "clear") {
        num1 = "";
        div.textContent = "0";
      } else if (
        e.target.textContent === "+" ||
        e.target.textContent === "-" ||
        e.target.textContent === "*" ||
        e.target.textContent === "/"
      ) {
        operator = e.target.textContent;
      } else if (e.target.textContent === "⌫" && num1.length > 1) {
        num1 = num1.slice(0, -1);
        div.textContent = num1;
      } else if (e.target.textContent === "⌫" && num1.length === 1) {
        num1 = "";
        div.textContent = "0";
      }
    } else if (operator !== "") {
      if (e.target.textContent === "." && num2 === "") {
        num2 = "0.";
        div.textContent = num2;
      } else if (
        (e.target.textContent === "0" && num2 !== "") ||
        e.target.textContent === "1" ||
        e.target.textContent === "2" ||
        e.target.textContent === "3" ||
        e.target.textContent === "4" ||
        e.target.textContent === "5" ||
        e.target.textContent === "6" ||
        e.target.textContent === "7" ||
        e.target.textContent === "8" ||
        e.target.textContent === "9" ||
        (e.target.textContent === "." && !num2.includes("."))
      ) {
        num2 += e.target.textContent;
        div.textContent = num2;
      } else if (e.target.textContent === "clear") {
        num2 = "";
        div.textContent = "0";
      } else if (e.target.textContent === "⌫" && num2.length > 1) {
        num2 = num2.slice(0, -1);
        div.textContent = num2;
      } else if (e.target.textContent === "⌫" && num2.length === 1) {
        num2 = "";
        div.textContent = "0";
      }
    }
    console.log(num1);
    console.log(num2);
  });
});
