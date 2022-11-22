const InputError = require("../src/InputError");
const { ERROR } = require("./Constant/Constant");

class BridgeGame {
  #bridge;
  #currentIdx;
  #bridgeMap;
  #retryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentIdx = 0;
    this.#bridgeMap = [[], []]; // 0 ≒ D , 1 ≒ U
    this.#retryCount = 1;
  }
  canMove(input) {
    if (!["U", "D"].includes(input)) throw new InputError("U/D", ERROR.NOT_UD);
    if (input === this.#bridge[this.#currentIdx]) return true;
    return false;
  }

  move(input) {
    if (input == this.#bridge[this.#currentIdx]) {
      this.#currentIdx += 1;
      return this.#currentIdx == this.#bridge.length ? "성공" : "O";
    } else {
      return "X";
    }
  }

  fillMap(position) {
    const str = this.canMove(position) ? "O" : "X";
    const positionNumber = position == "U" ? 1 : 0;
    this.#bridgeMap[positionNumber].push(str);
    this.#bridgeMap[Number(!positionNumber)].push(" ");
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }

  getRetryCount() {
    return this.#retryCount;
  }

  isRetry(input) {
    if (!["R", "Q"].includes(input)) throw new InputError("R/Q", ERROR.NOT_RQ);
    if (input == "R") return this.retry();
    return false;
  }
  retry() {
    this.#retryCount += 1;
    this.#currentIdx = 0;
    this.#bridgeMap = [[], []];
    return true;
  }
}

module.exports = BridgeGame;
