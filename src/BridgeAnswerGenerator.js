const generateRandomNumber = require("./BridgeRandomNumberGenerator").generate;
const BridgeMaker = require("./BridgeMaker");

class BridgeAnswerPath {
  #answerBridge = { path: [], size: 0 };

  getbridge() {
    return this.#answerBridge.path;
  }
  set size(size) {
    this.#answerBridge.size = Number(size);
  }
  get size() {
    return this.#answerBridge.size;
  }
  buildBridge() {
    this.#answerBridge.path = BridgeMaker.makeBridge(this.#answerBridge.size, generateRandomNumber);
  }
}
module.exports = BridgeAnswerPath;
