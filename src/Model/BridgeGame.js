const BridgeMaker = require("../BridgeMaker");
const { SPACE, COMMAND } = require("../utils/constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 * BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
 */
class BridgeGame {
  #size;

  #bridge;

  #attemptCnt;

  #movingProcess;

  constructor() {
    this.#size = 0;
    this.#attemptCnt = 1;
    this.#bridge = [];
    this.#movingProcess = [];
  }

  receiveSize(size) {
    this.#size = size;
    this.makeBridge();
  }

  makeBridge() {
    this.#bridge = BridgeMaker.getSize(this.#size);
  }

  move(moving) {
    this.#movingProcess.push(moving);
    const nowStep = this.checkNowStep();
    const isSafe = this.checkTrap(nowStep, moving);
    const isEnd = this.checkEnd(nowStep);
    return [this.#bridge, isSafe, isEnd];
  }

  checkNowStep() {
    return this.#movingProcess.length - 1;
  }

  checkTrap(nowStep, moving) {
    return this.#bridge[nowStep][SPACE[moving]];
  }

  checkEnd(nowStep) {
    return this.#size - 1 === nowStep;
  }

  retry(answer) {
    if (answer === COMMAND.RETRY) {
      this.#movingProcess = [];
      this.#attemptCnt += 1;
      return [true, this.#attemptCnt];
    } else if (answer === COMMAND.QUIT) return [false, this.#attemptCnt];
  }

  letEnd() {
    return this.#attemptCnt;
  }
}

module.exports = BridgeGame;
