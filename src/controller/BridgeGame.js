const { CELL } = require("../model/component");
let resultUp = [];
let resultDown = [];

class BridgeGame {
  constructor(upDown, computer, count) {
    this.upDown = upDown;
    this.computer = computer;
    this.count = count;
  }

  move(upDown, computer, count) {
    this.upDown = upDown;
    this.computer = computer;
    this.count = count;
    this.saveMove(upDown, computer, count);
    return [resultUp, resultDown];
  }

  retry(upDown, computer, count) {
    resultUp = [];
    resultDown = [];
    this.upDown = upDown;
    this.computer = computer;
    this.count = count;
    this.saveMove();
    return [resultUp, resultDown];
  }

  saveMove() {
    this.changeUpDown();
  }

  changeUpDown() {
    if (this.upDown === "U") {
      this.saveUp();
    }
    if (this.upDown === "D") {
      this.saveDown();
    }
  }

  saveUp() {
    if (this.computer[this.count] !== "U") {
      resultUp.push(CELL.ZERO);
      resultDown.push(" ");
    }
    if (this.computer[this.count] === "U") {
      resultUp.push(CELL.ONE);
      resultDown.push(" ");
    }
  }

  saveDown() {
    if (this.computer[this.count] !== "D") {
      resultUp.push(" ");
      resultDown.push(CELL.ZERO);
    }
    if (this.computer[this.count] === "D") {
      resultUp.push(" ");
      resultDown.push(CELL.ONE);
    }
  }
}

module.exports = BridgeGame;
