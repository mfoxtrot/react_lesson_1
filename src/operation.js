export default class Operation {

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  addition() {
    return this.x + this.y;
  }

  subtraction() {
    return this.x - this.y;
  }

  multiplication() {
    return this.x * this.y;
  }

  division() {
    return this.x / this.y;
  }
};
