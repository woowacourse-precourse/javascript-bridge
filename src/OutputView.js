const { Console } = require('@woowacourse/mission-utils');
const {
  RESULT_MSG,
  FAIL_MSG,
  SUCCESS_MSG,
  TOTAL_COUNT_MSG,
  MOVE_UP,
  MOVE_DOWN,
  START_BRIDGE,
  END_BRIDGE,
  SUCCESS,
  FAIL,
  BAR,
  BLANK,
} = require('./constants');

const OutputView = {
  printMap(moveInputArray) {
    const resultMap = this.makeResultMap(moveInputArray);
    resultMap.forEach((bridge) => {
      Console.print(bridge);
    });
  },

  makeResultMap(moveInputArray) {
    let resultMap = [];
    for (let floor = 0; floor < 2; floor += 1) {
      resultMap = this.mergeTwoBlock(floor, moveInputArray, resultMap);
    }
    return resultMap;
  },

  mergeTwoBlock(floor, moveInputArray, resultMap) {
    let block = '';
    if (floor === 0) block = this.makeUpSideBlock(moveInputArray);
    if (floor === 1) block = this.makeDownSideBlock(moveInputArray);
    const bridge = `${START_BRIDGE} ${block} ${END_BRIDGE}`;
    resultMap.push(bridge);
    return resultMap;
  },

  makeUpSideBlock(moveInputArray) {
    const upsideBlock = moveInputArray
      .map(({ isRightDirect, moveInput }) => {
        if (moveInput === MOVE_UP) {
          if (isRightDirect) return SUCCESS;
          return FAIL;
        } return BLANK;
      }).join(BAR);
    return upsideBlock;
  },

  makeDownSideBlock(moveInputArray) {
    const downSideBlock = moveInputArray
      .map(({ isRightDirect, moveInput }) => {
        if (moveInput === MOVE_DOWN) {
          if (isRightDirect) return SUCCESS;
          return FAIL;
        } return BLANK;
      }).join(BAR);
    return downSideBlock;
  },

  printResult(moveInputArray, isSuccess, gameCount) {
    Console.print(RESULT_MSG);
    this.printMap(moveInputArray);
    if (isSuccess) Console.print(SUCCESS_MSG);
    else Console.print(FAIL_MSG);
    Console.print(`${TOTAL_COUNT_MSG}${gameCount}`);
  },

  printGuide(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
