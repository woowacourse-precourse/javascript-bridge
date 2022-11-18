const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { SPACE, COMMAND } = require("./utils/constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 * BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
 */
class BridgeGame {
  #size;

  #bridge;

  #retryCnt;

  constructor() {
    this.#size = 0;
    this.#bridge = [];
    this.#retryCnt = 0;
  }

  receiveSize(size) {
    this.#size = size;
    this.makeBridge();
  }

  makeBridge() {
    this.#bridge = BridgeMaker.getSize(this.#size);
  }

  move(nowStep, moving) {
    const isSafe = this.checkTrap(nowStep, moving);
    const isEnd = this.checkEnd(nowStep);
    return [this.#bridge, isSafe, isEnd];
  }

  checkTrap(nowStep, moving) {
    return this.#bridge[nowStep][SPACE[moving]];
  }

  checkEnd(nowStep) {
    return this.#size - 1 === nowStep;
  }

  retry(answer) {
    if (answer === COMMAND.RETRY) {
      this.#retryCnt += 1;
      return [true, this.#retryCnt];
    } else if (answer === COMMAND.QUIT) return [false, this.#retryCnt];
  }

  letEnd() {
    return this.#retryCnt;
  }
}

module.exports = BridgeGame;
