const { Console } = require('@woowacourse/mission-utils');
const {
  RESULT,
  BRIDGE,
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
    const bridge = `${BRIDGE.START_BRIDGE} ${block} ${BRIDGE.END_BRIDGE}`;
    resultMap.push(bridge);
    return resultMap;
  },

  makeUpSideBlock(moveInputArray) {
    const upsideBlock = moveInputArray
      .map(({ isRightDirect, moveInput }) => {
        if (moveInput === BRIDGE.MOVE_UP) {
          if (isRightDirect) return BRIDGE.SUCCESS;
          return BRIDGE.FAIL;
        } return BRIDGE.BLANK;
      }).join(BRIDGE.BAR);
    return upsideBlock;
  },

  makeDownSideBlock(moveInputArray) {
    const downSideBlock = moveInputArray
      .map(({ isRightDirect, moveInput }) => {
        if (moveInput === BRIDGE.MOVE_DOWN) {
          if (isRightDirect) return BRIDGE.SUCCESS;
          return BRIDGE.FAIL;
        } return BRIDGE.BLANK;
      }).join(BRIDGE.BAR);
    return downSideBlock;
  },

  printResult(moveInputArray, isSuccess, gameCount) {
    Console.print(RESULT.RESULT_MSG);
    this.printMap(moveInputArray);
    if (isSuccess) Console.print(RESULT.SUCCESS_MSG);
    else Console.print(RESULT.FAIL_MSG);
    Console.print(`${RESULT.TOTAL_COUNT_MSG}${gameCount}`);
  },

  printGuide(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
