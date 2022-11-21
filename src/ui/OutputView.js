const { Console } = require('@woowacourse/mission-utils');
const {
  CMM_START,
  CMM_RESULT,
  CMM_IF_SUCCESS,
  CMM_SHOW_TRY,
  CMM_SUCCESS,
  CMM_FAILURE,
} = require('../constant/Comment');
const { UP, DOWN, BRIDGE_O, BRIDGE_X, BRIDGE_NONE } = require('../constant/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(isAnswerList, userInputString) {
    let upperBridge = [];
    let lowerBridge = [];
    for (let i = 0; i < userInputString.length; i++) {
      if (userInputString[i] === UP) {
        upperBridge.push(isAnswerList[i] ? BRIDGE_O : BRIDGE_X);
        lowerBridge.push(BRIDGE_NONE);
      } else if (userInputString[i] === DOWN) {
        lowerBridge.push(isAnswerList[i] ? BRIDGE_O : BRIDGE_X);
        upperBridge.push(BRIDGE_NONE);
      }
    }
    this.printBridge(upperBridge, lowerBridge);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isAnswerList, userInputString, tryNum) {
    Console.print(CMM_RESULT);
    this.printMap(isAnswerList, userInputString);
    Console.print(CMM_IF_SUCCESS + this.checkSuccess(isAnswerList, userInputString));
    Console.print(CMM_SHOW_TRY + tryNum);
    Console.close();
  },

  /**
   * 게임 시작 멘트를 출력한다.
   */
  printStart() {
    Console.print(CMM_START);
  },

  modifyCurStr(char) {
    switch (char) {
      case 'o':
        return ' O |';
      case 'n':
        return '   |';
      case 'x':
        return ' X |';
    }
  },

  checkSuccess(isAnswerList) {
    const lastInd = isAnswerList.length - 1;
    if (isAnswerList[lastInd] === true) {
      return CMM_SUCCESS;
    }
    return CMM_FAILURE;
  },
  printBridge(upperBridge, lowerBridge) {
    let upperString = `[${upperBridge.join('|')}]`;
    let lowerString = `[${lowerBridge.join('|')}]`;
    Console.print(upperString);
    Console.print(lowerString);
  },
};

module.exports = OutputView;
