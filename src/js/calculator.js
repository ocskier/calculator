class Calculator {
  constructor() {
    this._num1 = undefined;
    this._num2 = undefined;
    this._operator = undefined;
  }
  get num1() {
    return this._num1;
  }
  get num2() {
    return this._num2;
  }
  set num1(num) {
    this._num1 = num;
  }
  set num2(num) {
    this._num2 = num;
  }
  setOperator(action) {
    this.operator = action;
  }
  getAnswer() {
    switch (this._operator) {
      case "+":
        return this._num1 + this._num2;
      case "-":
        return this._num1 - this._num2;
      case "*":
        return this._num1 * this._num2;
      case "/":
        return this._num1 / this._num2;
      default:
        return undefined;
    }
  }
}
