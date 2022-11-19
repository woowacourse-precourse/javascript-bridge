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

  static replace(target, item1, item2) {
    const [COMPARISON_TARGET_1, RETURN_TARGET_1] = item1;
    const [COMPARISON_TARGET_2, RETURN_TARGET_2] = item2;

    if (target === COMPARISON_TARGET_1) return RETURN_TARGET_1;
    if (target === COMPARISON_TARGET_2) return RETURN_TARGET_2;

    return Validation.throwError(Validation.RANGE_ERROR_TEXT);
  }

  static replaceString(numberValue) {
    const TARGET_NUMBER = Application.convertNumber(numberValue);
    const REPLCE_ITME_1 = [0, 'D'];
    const REPLCE_ITME_2 = [1, 'U'];

    return BridgeGame.replace(TARGET_NUMBER, REPLCE_ITME_1, REPLCE_ITME_2);
  }

  static replaceNumber(stringValue) {
    const TARGET_NUMBER = stringValue;
    const REPLCE_ITME_1 = ['D', 1];
    const REPLCE_ITME_2 = ['U', 0];

    return BridgeGame.replace(TARGET_NUMBER, REPLCE_ITME_1, REPLCE_ITME_2);
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
