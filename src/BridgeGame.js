const Application = require('./Application');
const Validation = require('./Validation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userPosition;

  #bridge;

  constructor() {
    this.#userPosition = null;
  }

  static replaceString(value) {
    const TARGET_NUMBER = Application.convertNumber(value);
    const [TOP_NUMBER, TOP] = [0, 'D'];
    const [BOTTOM_NUMBER, BOTTOM] = [1, 'U'];

    if (TARGET_NUMBER === TOP_NUMBER) return TOP;
    if (TARGET_NUMBER === BOTTOM_NUMBER) return BOTTOM;

    return Validation.throwError(Validation.RANGE_ERROR_TEXT);
  }

  static checkIncludeUandD(userInput) {
    const INPUT_TARGET = ['U', 'D'];
    const isIncludeUandD = Application.hasContain(INPUT_TARGET);

    return isIncludeUandD(userInput);
  }

  static checkIncludeRandQ(userInput) {
    const INPUT_TARGET = ['R', 'Q'];
    const isIncludeRandQ = Application.hasContain(INPUT_TARGET);

    return isIncludeRandQ(userInput);
  }

  isBeforeStart() {
    return this.#userPosition === null;
  }

  checkBeforeStart() {
    const POSITION_ERROR_TEXT = '[ERROR] 플레이가 아직 이동하지 않았습니다.';

    if (this.isBeforeStart()) {
      Validation.throwError(POSITION_ERROR_TEXT);
    }
  }

  setFirstPosition() {
    const ZERO = 0;
    this.#userPosition = ZERO;

    return this.#userPosition;
  }

  findUserPosition() {
    return this.#userPosition;
  }

  move() {
    if (this.isBeforeStart()) {
      return this.setFirstPosition();
    }

    const INCREASE = 1;
    this.#userPosition = this.findUserPosition() + INCREASE;

    return this.#userPosition;
  }

  retry() {
    this.#userPosition = null;

    return this.#userPosition;
  }

  isBridgeEnd(arrayLength) {
    Validation.number(arrayLength);

    const ONE = 1;
    const MAX_INDEX_POINT = arrayLength - ONE;
    const CURRENT_INDEX = this.findUserPosition();

    return MAX_INDEX_POINT === CURRENT_INDEX;
  }

  setBridge(bridgeResult) {
    const copiedBridgeResult = Application.copyArray(bridgeResult);
    const bridgelength = copiedBridgeResult.length;

    Application.checkRangeThreeToTwenty(bridgelength);

    this.#bridge = copiedBridgeResult;

    return copiedBridgeResult;
  }

  getBridge() {
    return this.#bridge;
  }

  calcBridgeReuslt(userInput) {
    this.checkBeforeStart();
    BridgeGame.checkIncludeUandD(userInput);

    const userPosition = this.findUserPosition();
    const bridge = this.getBridge();
    const [CORRECT, INCORRECT] = ['O', 'X'];

    return bridge[userPosition] === userInput ? CORRECT : INCORRECT;
  }
}

module.exports = BridgeGame;
