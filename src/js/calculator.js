class Calculator {
  constructor() {
    this.num1 = undefined;
    this.num2 = undefined;
    this.operator = undefined;
  }
  setNum1(num) {
    this.num1 = num;
  }
  setNum2(num) {
    this.num2 = num;
  }
  setOperator(action) {
    this.operator = action;
  }
  getAnswer() {
    switch (this.operator) {
      case "+":
        return this.num1 + this.num2;
      case "-":
        return this.num1 - this.num2;
      case "*":
        return this.num1 * this.num2;
      case "/":
        return this.num1 / this.num2;
      default:
        return undefined;
    }
  }
}
