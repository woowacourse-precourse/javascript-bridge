const { MOVING_TYPE, OUTPUT_CONSTANTS } = require('../constants');

/** @type {(number | null)} */
let bridgeSize = null;

/** @type {(Array<string> | null)} */
let userBridge = null;

/** @type {(Array<string> | null)} */
let answerBridge = null;

/** @type {number} */
let tryCount = 0;

/** @type {boolean} */
let isClear = false;

/** BridgeGame에 대한 State를 저장하는 객체 */
const BridgeState = {
  initializeState() {
    bridgeSize = null;
    userBridge = null;
    answerBridge = null;
    tryCount = 0;
    isClear = false;
  },

  getBridgeSize() {
    return bridgeSize;
  },

  /** @param {number} inputSize 다리의 크기 */
  setBridgeSize(inputSize) {
    bridgeSize = inputSize;
  },

  getUserBridge() {
    return userBridge;
  },

  /** @param {Array<string>} inputBridge 유저의 다리 데이터 */
  setUserBridge(inputBridge) {
    userBridge = inputBridge;
  },

  initializeUserBridge() {
    userBridge = [];
  },

  /** @param {MOVE_TYPE} moving 건너갈 칸 */
  addUserBridgeMoving(moving) {
    if (!userBridge) userBridge = [];
    userBridge.push(moving);
  },

  getAnswerBridge() {
    return answerBridge;
  },

  /** @param {Array<string>} inputAnswerBridge 정답 다리 데이터 */
  setAnswerBridge(inputAnswerBridge) {
    answerBridge = inputAnswerBridge;
  },

  getTryCount() {
    return tryCount;
  },

  addTryCount() {
    tryCount += 1;
  },

  getIsClear() {
    return isClear;
  },

  /** @param {boolean} inputIsClear 게임 클리어 여부 */
  setIsClear(inputIsClear) {
    isClear = inputIsClear;
  },

  getUserLastIndex() {
    return userBridge.length - 1;
  },

  getUserEachMoving() {
    const { UP, DOWN } = MOVING_TYPE;
    const { SUCCESS, BLANK } = OUTPUT_CONSTANTS.MARK;

    const upMoving = userBridge.map((moving) => (moving === UP && SUCCESS) || BLANK);
    const downMoving = userBridge.map((moving) => (moving === DOWN && SUCCESS) || BLANK);

    return [upMoving, downMoving];
  },

  getUserLastMoving() {
    return userBridge[userBridge.length - 1];
  },

  isSuccess() {
    return userBridge.every((moving, index) => {
      return answerBridge[index] === moving;
    });
  },

  isAllDone() {
    return this.isSuccess() && userBridge.length === bridgeSize;
  },
};

module.exports = BridgeState;
