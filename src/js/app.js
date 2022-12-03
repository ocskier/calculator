const isClickableEls = document.querySelectorAll(".is-clickable");
const calc = new Calculator();

let isNum1Selected = false;
let isOperatorSelected = false;
let num1 = "";
let operator = "";

isClickableEls.forEach((el) => {
  el.addEventListener("click", function () {
    const userInput = this.children[0].textContent;
    if (!isNum1Selected && !isNaN(Number(userInput))) {
      num1 += userInput;
      calc.num1 = Number(num1);
      return calc.num1;
    }
    if (!isOperatorSelected && /[+\-*\/]/g.test(userInput)) {
      if (num1) {
        calc.operator = userInput;
        isNum1Selected = true;
        isOperatorSelected = true;
        return calc.operator;
      }
    }
  });
});
