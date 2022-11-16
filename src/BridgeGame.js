const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
  #progressIdx = 0;
  #matchCount = 0;
  #bridge = [];
  #gameCount = 1;

  start(size) {
    this.#bridge = BridgeMaker.makeBridge(size, this.makeRandomNumber(size));
    console.log(this.#bridge);
  }

  makeRandomNumber(size) {
    let tempNumberBridge = [];
    for (let i = 0; i < size; i++) {
      tempNumberBridge.push(RandomNumberGenerator.generate());
    }
    return tempNumberBridge;
  }

  move(answer) {
    let isCorrect = false;
    if (
      (answer == "U" && answer == this.#bridge[this.#progressIdx]) ||
      (answer == "D" && answer == this.#bridge[this.#progressIdx])
    ) {
      this.#matchCount += 1;
      isCorrect = true;
    }
    this.#progressIdx += 1;
    return isCorrect;
  }

  getProgressIndex() {
    return this.#progressIdx;
  }

  crossBridgeCompletely() {
    console.log(this.#bridge.length, this.#matchCount);
    return this.#bridge.length == this.#matchCount ? true : false;
  }

  retry(answer) {
    if (answer == "R") {
      this.#gameCount += 1;
      this.#progressIdx = 0;
      this.#matchCount = 0;
      return true;
    }
    if (answer == "Q") return false;
  }
}

module.exports = BridgeGame;
