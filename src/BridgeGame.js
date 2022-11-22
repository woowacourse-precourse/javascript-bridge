const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MOVE, MOVE_RESULT } = require('./constants/bridge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor() {
    this.#bridge;
    this.trial = 1;
    this.isSuccess = false;
    this.upCounter = [];
    this.downCounter = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, pointer) {
    const moveResult = this.isCorrectMove(input, pointer);

    moveResult ? this.setCorrectCounter(input) : this.setInCorrectCounter(input);
    if (moveResult && this.isFinalMove(pointer)) this.setSuccess();

    return { moveResult, isSuccess: this.isSuccess, upDownCounter: this.getUpDownCounter() };
  }

  isCorrectMove(input, pointer) {
    return input === this.#bridge[pointer];
  }

  isFinalMove(pointer) {
    return pointer === this.#bridge.length - 1;
  }

  setCorrectCounter(input) {
    if (input === MOVE.UP) {
      this.upCounter.push(MOVE_RESULT.CORRECT);
      this.downCounter.push(MOVE_RESULT.BLANK);
    }
    if (input === MOVE.DOWN) {
      this.upCounter.push(MOVE_RESULT.BLANK);
      this.downCounter.push(MOVE_RESULT.CORRECT);
    }
  }

  setInCorrectCounter(input) {
    if (input === MOVE.UP) {
      this.upCounter.push(MOVE_RESULT.INCORRECT);
      this.downCounter.push(MOVE_RESULT.BLANK);
    }
    if (input === MOVE.DOWN) {
      this.upCounter.push(MOVE_RESULT.BLANK);
      this.downCounter.push(MOVE_RESULT.INCORRECT);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.trial += 1;
    this.upCounter = [];
    this.downCounter = [];
  }

  getUpDownCounter() {
    return [this.upCounter, this.downCounter];
  }

  setSuccess() {
    this.isSuccess = true;
  }

  setBridge(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }
}
module.exports = BridgeGame;
