const RandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");

class BridgeGame {
  static INPUT_UP = "U";
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

  checkInputCorrect(input) {
    this.isCorrect = false;
    if (this.move(input)) this.progressOneStep();

    this.progressIdx += 1;
    return this.isCorrect;
  }

  progressOneStep() {
    this.numberOfCorrect += 1;
    this.isCorrect = true;
  }

  move(input) {
    return (
      (input == "U" && input == this.#bridge[this.progressIdx]) ||
      (input == "D" && input == this.#bridge[this.progressIdx])
    );
  }

  getIsCorrect() {
    return this.isCorrect;
  }
  getGameRunCount() {
    return this.gameRunCount;
  }

  crossBridgeCompletely() {
    return this.#bridge.length == this.numberOfCorrect;
  }

  setInitializeCondition() {
    this.gameRunCount += 1;
    this.progressIdx = this.numberOfCorrect = 0;
  }

  retry(input) {
    if (input == "R") {
      this.setInitializeCondition();
      return true;
    }
    if (input == "Q") return false;
  }
}

module.exports = BridgeGame;
