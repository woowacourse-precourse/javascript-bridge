const Application = require('./Application');
const Validation = require('./Validation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userPosition;

  #bridge;

  #PositionLog;

  constructor() {
    this.#userPosition = null;
    this.#PositionLog = new Map();
  }

  static replaceString(numberValue) {
    const TARGET_NUMBER = Application.convertNumber(numberValue);
    const REPLCE_ITME_1 = [0, 'D'];
    const REPLCE_ITME_2 = [1, 'U'];

    return Application.replace(TARGET_NUMBER, REPLCE_ITME_1, REPLCE_ITME_2);
  }

  static replaceNumber(stringValue) {
    const TARGET_STRING = stringValue;
    const REPLCE_ITME_1 = ['D', 1];
    const REPLCE_ITME_2 = ['U', 0];

    return Application.replace(TARGET_STRING, REPLCE_ITME_1, REPLCE_ITME_2);
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

  getPositionIndex(userInput) {
    const TOP_BOTTOM_INDEX = BridgeGame.replaceNumber(userInput);
    const MOVE_INDEX = this.findUserPosition();

    this.checkBeforeStart();

    return [TOP_BOTTOM_INDEX, MOVE_INDEX];
  }

  setPositionLog(positionIndex, bridgeResult) {
    this.checkBeforeStart();

    const USER_POSITION = this.findUserPosition();
    const positionLog = [positionIndex, bridgeResult];

    this.#PositionLog.set(USER_POSITION, positionLog);

    return positionLog;
  }
}

module.exports = BridgeGame;
