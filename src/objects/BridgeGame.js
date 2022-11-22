const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("../views/OutputView");
const InputView = require("../views/InputView");
const { makeBridge } = require("../BridgeMaker");

const User = require("./User");

class BridgeGame {
  #bridge;
  #playCount;
  #userBridge;
  constructor(bridge) {
    this.#bridge = bridge;
    this.#userBridge = new User();
    this.#playCount = 1;
  }
  mapBridge() {
    return this.#userBridge.mapBridge();
  }
  mapErrorBridge() {
    return this.#userBridge.mapErrorBridge();
  }
  move(direction) {
    this.#userBridge.move(direction, this.#bridge);
  }

  isCorrectDirection(direction) {
    return this.#userBridge.isCorrectDirection(direction, this.#bridge);
  }
  isEnd() {
    return this.#userBridge.isEnd(this.#bridge);
  }
  isGameFinish(direction) {
    console.log(this.isEnd() && this.isCorrectDirection(direction));
    return this.isEnd() && this.isCorrectDirection(direction);
  }
  getResult() {
    return [this.mapBridge(), this.#playCount];
  }
  retry() {
    this.#userBridge = new User();
    this.#playCount++;
  }
}

module.exports = BridgeGame;
