const Validator = require('./Validator');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { ERROR_MSG, NEXT_STEP } = require('./libs/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #size;
  #bridge = [];
  #movedDirections = [];
  #cntRetry = 1;
  #result = true;

  constructor(size) {
    this.#size = size;
    this.validateBridgeSize();
    this.initBridge();
  }

  validateBridgeSize() {
    const isValidBridgeSize = Validator.validBridgeSize(this.#size);

    if (!isValidBridgeSize) {
      throw new Error(ERROR_MSG.invalidBridgeSize);
    }

    return isValidBridgeSize;
  }

  initBridge() {
    this.#bridge = makeBridge(this.#size, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.validateMoveDirection(direction);
    this.#movedDirections.push(direction);
  }

  validateMoveDirection(direction) {
    const isValidMoveDirection = Validator.validMovieDirection(direction);

    if (!isValidMoveDirection) {
      throw new Error(ERROR_MSG.invalidMoveDirection);
    }

    return isValidMoveDirection;
  }

  getMovedBridge() {
    return this.#movedDirections.map((direction, idx) => ({ direction, correct: direction === this.#bridge[idx] }));
  }

  nextStep() {
    const { correctMove, wrongMove, endGame } = NEXT_STEP;
    const movedBridge = this.getMovedBridge();
    const isWrongMove = !movedBridge[movedBridge.length - 1].correct;
    const isEndGame = movedBridge.length === this.#size;

    return isWrongMove ? wrongMove : isEndGame ? endGame : correctMove;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#movedDirections = [];
    this.#cntRetry += 1;
  }

  quit() {
    this.#result = false;
  }

  getStatistic() {
    return { result: this.#result, cntRetry: this.#cntRetry };
  }
}

module.exports = BridgeGame;
