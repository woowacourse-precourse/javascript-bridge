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
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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
    if (floor === 0) {
      block = this.makeUpSideBlock(moveInputArray);
    }
    if (floor === 1) {
      block = this.makeDownSideBlock(moveInputArray);
    }
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
        }
        return BLANK;
      })
      .join(BAR);
    return upsideBlock;
  },

  makeDownSideBlock(moveInputArray) {
    const downSideBlock = moveInputArray
      .map(({ isRightDirect, moveInput }) => {
        if (moveInput === MOVE_DOWN) {
          if (isRightDirect) return SUCCESS;
          return FAIL;
        }
        return BLANK;
      })
      .join(BAR);
    return downSideBlock;
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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
