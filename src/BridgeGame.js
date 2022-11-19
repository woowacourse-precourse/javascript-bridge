const BridgeValidator = require('./Bridge.validator');
const { BRIDGE_LENGTH_MAX, BRIDGE_LENGTH_MIN } = require('./Resource');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #bridgeAnswers = [];
  #currentPosition = 0;
  #maxPosition = 0;
  #isFinish = false;
  #tryCount = 1;

  constructor(bridge) {
    BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MIN);
    this.#bridge = bridge;
    this.#maxPosition = bridge.length - 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} nextMoveChar 'U', 'D'만 입력을 받습니다.
   */
  move(nextMoveChar) {
    BridgeValidator.checkInputNext(nextMoveChar);
    BridgeValidator.checkPosition(this.#currentPosition, this.#maxPosition);

    if (nextMoveChar == this.#bridge[this.#currentPosition]) {
      return this.moveNextTrue();
    }
    return this.moveNextFalse();
  }

  moveNextTrue() {
    this.#currentPosition += 1;
    this.#bridgeAnswers.push('O');
    if (BridgeValidator.checkFinish(this.#currentPosition, this.#maxPosition)) {
      this.#isFinish = true;
    }
    return true;
  }

  moveNextFalse() {
    this.#bridgeAnswers.push('X');
    this.#isFinish = true;
    return false;
  }

  get bridgeAnswers() {
    return this.#bridgeAnswers;
  }
  get isFinish() {
    return this.#isFinish;
  }
  get bridge() {
    return this.#bridge;
  }
  get tryCount() {
    return this.#tryCount;
  }
  get isSuccess() {
    return this.#currentPosition == this.#maxPosition;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} gameCommand R은 재시작, Q는 종료를 뜻합니다.
   * @return {boolean} true는 재시작, false는 종료를 뜻합니다.
   */
  retry(gameCommand) {
    BridgeValidator.checkGameCommand(gameCommand);
    if (gameCommand == 'Q') {
      return false;
    }
    if (gameCommand == 'R') {
      this.#tryCount += 1;
      this.#bridgeAnswers = [];
      this.#currentPosition = 0;
      this.#isFinish = true;
    }
    return false;
  }
}

module.exports = BridgeGame;
