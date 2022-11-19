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

  checkInputCorrect(answer) {
    this.isCorrect = false;
    if (this.move(answer)) this.progressOneStep();

    this.progressIdx += 1;
    return this.isCorrect;
  }

  progressOneStep() {
    this.numberOfCorrect += 1;
    this.isCorrect = true;
  }

  move(answer) {
    return (
      (answer == "U" && answer == this.#bridge[this.progressIdx]) ||
      (answer == "D" && answer == this.#bridge[this.progressIdx])
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

  retry(answer) {
    if (answer == "R") {
      this.setInitializeCondition();
      return true;
    }
    if (answer == "Q") return false;
  }
}

module.exports = BridgeGame;
