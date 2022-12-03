const isClickableEls = document.querySelectorAll(".is-clickable");
const calc = new Calculator();

let isNum1Selected = false;
let isOperatorSelected = false;

isClickableEls.forEach((el) => {
  el.addEventListener("click", function () {
    const userInput = this.children[0].textContent;
    if (!isNum1Selected && !isNaN(Number(userInput))) {
      calc.num1 += Number(userInput);
      return calc.num1;
    }
    if (!isOperatorSelected && /[+\-*\/]/g.test(userInput)) {
      if (calc.num1) {
        calc.operator = userInput;
        isNum1Selected = true;
        isOperatorSelected = true;
        return calc.operator;
      }
    }
    if (isNum1Selected && isOperatorSelected && !isNaN(Number(userInput))) {
      calc.num2 += Number(userInput);
      return calc.num2;
    }
  });
});
