const displayEl = document.querySelector(".display");
const isClickableEls = document.querySelectorAll(".is-clickable");
const resetEl = document.querySelector(".reset");
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

const updateDisplay = () =>
  (displayEl.value = `${calc.num1 || ""}${calc.operator || ""}${
    calc.num2 || ""
  }${isNum1Selected && isNum2Selected && isOperatorSelected ? "=" : ""}${
    isNum1Selected && isNum2Selected && isOperatorSelected
      ? calc.getAnswer()
      : ""
  }`);

isClickableEls.forEach((el) => {
  el.addEventListener("click", function () {
    if (!(isNum1Selected && isNum2Selected && isOperatorSelected)) {
      const userInput = this.children[0].textContent;
      if (!isNum1Selected && !isNaN(Number(userInput))) {
        calc.num1 += userInput;
        return updateDisplay();
      }
      if (!isOperatorSelected && /[+\-*\/]/g.test(userInput)) {
        if (calc.num1) {
          isNum1Selected = true;
          calc.operator = userInput;
          isOperatorSelected = true;
          return updateDisplay();
        }
      }
      if (isNum1Selected && isOperatorSelected && !isNaN(Number(userInput))) {
        calc.num2 += userInput;
        return updateDisplay();
      }
      if (isNum1Selected && isOperatorSelected && /[=]/g.test(userInput)) {
        if (calc.num1 && calc.num2) {
          isNum2Selected = true;
          return updateDisplay();
        }
      }
    }
  });
});

resetEl.onclick = () => {
  resetCalc();
  updateDisplay();
};
