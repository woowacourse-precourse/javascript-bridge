const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
  constructor() {
    this.tryCount = 0;
    this.map = [];
  }

  move(answer, bridge) {
    if (answer === bridge[this.tryCount]) {
      this.tryCount += 1;
      this.map.push({ position: answer, result: "O", tryCount: this.tryCount });
      return this.map;
    } else {
      this.tryCount += 1;
      this.map.push({ position: answer, result: "X", tryCount: this.tryCount });
      return this.map;
    }
  }

  retry() {}
}

module.exports = BridgeGame;
