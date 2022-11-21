const RandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const { USER_INPUT } = require("../Messages/constants");

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
      (input == USER_INPUT.UP && input == this.#bridge[this.progressIdx]) ||
      (input == USER_INPUT.DOWN && input == this.#bridge[this.progressIdx])
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
    if (input == USER_INPUT.RESTART) {
      this.setInitializeCondition();
      return true;
    }
    if (input == USER_INPUT.QUIT) return false;
  }
}

module.exports = BridgeGame;
