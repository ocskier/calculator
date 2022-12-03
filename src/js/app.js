const isClickableEls = document.querySelectorAll(".is-clickable");
const calc = new Calculator();

let isNum1Selected = false;
let isNum2Selected = false;
let isOperatorSelected = false;

const resetCalc = () => {
  calc.num1 = "";
  calc.num2 = "";
  calc.operator = "";
  isNum1Selected = false;
  isNum2Selected = false;
  isOperatorSelected = false;
};

isClickableEls.forEach((el) => {
  el.addEventListener("click", function () {
    const userInput = this.children[0].textContent;
    if (!isNum1Selected && !isNaN(Number(userInput))) {
      calc.num1 += Number(userInput);
      return calc.num1;
    }
    if (!isOperatorSelected && /[+\-*\/]/g.test(userInput)) {
      if (calc.num1) {
        isNum1Selected = true;
        calc.operator = userInput;
        isOperatorSelected = true;
        return calc.operator;
      }
    }
    if (isNum1Selected && isOperatorSelected && !isNaN(Number(userInput))) {
      calc.num2 += Number(userInput);
      return calc.num2;
    }
    if (isNum1Selected && isOperatorSelected && /[=]/g.test(userInput)) {
      if (calc.num1 && calc.num2) {
        isNum2Selected = true;
        console.log(
          `${calc.num1}${calc.operator}${calc.num2}=${calc.getAnswer()}`
        );
        resetCalc();
      }
    }
  });
});
