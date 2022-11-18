const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
  #bridge = [];

  constructor() {
    this.progressIdx = 0;
    this.numberOfCorrect = 0;
    this.isCorrect = false;
    this.gameRunCount = 1;
  }

  start(size) {
    this.#bridge = BridgeMaker.makeBridge(size, RandomNumberGenerator.generate);
  }

  checkInputCorrect(answer) {
    this.isCorrect = false;
    if (this.move(answer)) {
      this.numberOfCorrect += 1;
      this.isCorrect = true;
    }

    this.progressIdx += 1;
    return this.isCorrect;
  }

  move(answer) {
    return (answer == "U" && answer == this.#bridge[this.progressIdx]) ||
      (answer == "D" && answer == this.#bridge[this.progressIdx])
      ? true
      : false;
  }

  getIsCorrect() {
    return this.isCorrect;
  }
  getGameRunCount() {
    return this.gameRunCount;
  }

  crossBridgeCompletely() {
    return this.#bridge.length == this.numberOfCorrect ? true : false;
  }

  setInitializeCondition() {
    this.gameRunCount += 1;
    this.progressIdx = this.numberOfCorrect = 0;
  }

  retry(answer) {
    if (answer == "R") {
      this.initializeCondition();
      return true;
    }
    if (answer == "Q") return false;
  }
}

module.exports = BridgeGame;
