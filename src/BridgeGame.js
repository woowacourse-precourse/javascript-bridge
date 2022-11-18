const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
  #progressIdx = 0;
  #isCorrect = false;
  #matchCount = 0;
  #bridge = [];
  #gameCount = 1;

  start(size) {
    this.#bridge = BridgeMaker.makeBridge(size, RandomNumberGenerator.generate);
  }

  move(answer) {
    this.#isCorrect = false;
    if (this.checkInputCorrect(answer)) {
      this.#matchCount += 1;
      this.#isCorrect = true;
    }

    this.#progressIdx += 1;
    return this.#isCorrect;
  }

  checkInputCorrect(answer) {
    return (answer == "U" && answer == this.#bridge[this.#progressIdx]) ||
      (answer == "D" && answer == this.#bridge[this.#progressIdx])
      ? true
      : false;
  }

  getIdxAndIsCorrect() {
    return [this.#progressIdx - 1, this.#isCorrect];
  }

  crossBridgeCompletely() {
    return this.#bridge.length == this.#matchCount ? true : false;
  }

  getGameCount() {
    return this.#gameCount;
  }

  retry(answer) {
    if (answer == "R") {
      this.#gameCount += 1;
      this.#progressIdx = this.#matchCount = 0;
      return true;
    }
    if (answer == "Q") return false;
  }
}

module.exports = BridgeGame;
