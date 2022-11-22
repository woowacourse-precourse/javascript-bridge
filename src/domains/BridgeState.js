const { MOVING_TYPE, OUTPUT_CONSTANTS } = require('../constants');

let bridgeSize = null;
/**
 * @type {Array<string>}
 */
let userBridge = null;
let answerBridge = null;
let tryCount = 0;
let isClear = false;

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

  setBridgeSize(inputSize) {
    bridgeSize = inputSize;
  },

  getUserBridge() {
    return userBridge;
  },

  setUserBridge(inputBridge) {
    userBridge = inputBridge;
  },

  initializeUserBridge() {
    userBridge = [];
  },

  addUserBridgeMoving(moving) {
    if (!userBridge) userBridge = [];
    userBridge.push(moving);
  },

  getAnswerBridge() {
    return answerBridge;
  },

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
