const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const XBtn = document.getElementById("x");
const YBtn = document.getElementById("y");
const submitBtn = document.getElementById("submit");
const resultElement = document.getElementById("result");
let action;

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

XBtn.onclick = function () {
  action = "*";
};

YBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result > 0) {
    resultElement.style.color = "green";
  } else if (result == 0) {
    resultElement.style.color = "#747474";
  } else {
    resultElement.style.color = "red";
  }

  resultElement.textContent = result;
}

function math(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  } else {
  }
}

submitBtn.onclick = function () {
  const result = math(input_1, input_2, action);
  printResult(result);
};
