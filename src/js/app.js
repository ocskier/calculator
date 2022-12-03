const isClickableEls = document.querySelectorAll(".is-clickable");
const calc = new Calculator();

let isNum1Selected = false;
let num1 = "";

isClickableEls.forEach((el) => {
  el.addEventListener("click", function () {
    const userInput = this.children[0].textContent;
    if (!isNum1Selected && !isNaN(Number(userInput))) {
      num1 += userInput;
      calc.num1 = Number(num1);
      return calc.num1;
    }
  });
});
