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
   * 게임 시작 멘트를 출력한다.
   */
  start() {
    Console.print(CMM_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} isAnswerList
   * @param {string} userInputString
   */
  printMap(isAnswerList, userInputString) {
    let upperBridge = [];
    let lowerBridge = [];
    for (let i = 0; i < userInputString.length; i++) {
      upperBridge.push(this.makeOneBridge(userInputString[i], isAnswerList[i]).upper);
      lowerBridge.push(this.makeOneBridge(userInputString[i], isAnswerList[i]).lower);
    }
    this.printBridge(upperBridge, lowerBridge);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {*} isAnswerList
   * @param {*} userInputString
   * @param {*} tryNum
   */
  printResult(isAnswerList, userInputString, tryNum) {
    Console.print(CMM_RESULT);
    this.printMap(isAnswerList, userInputString);
    Console.print(CMM_IF_SUCCESS + this.checkSuccess(isAnswerList, userInputString));
    Console.print(CMM_SHOW_TRY + tryNum);
    Console.close();
  },
  /**
   * 사용자의 입력에 따라 생기는 다리의 모양을 그려준다.
   * @param {char} userInputChar
   * @param {char} isAnswerChar
   * @returns
   */
  makeOneBridge(userInputChar, isAnswerChar) {
    if (userInputChar === UP) {
      return { upper: isAnswerChar ? BRIDGE_O : BRIDGE_X, lower: BRIDGE_NONE };
    } else if (userInputChar === DOWN) {
      return { upper: BRIDGE_NONE, lower: isAnswerChar ? BRIDGE_O : BRIDGE_X };
    }
  },
  /**
   * 해당 판이 끝난 경우, 성공/실패 여부를 리턴한다
   * @param {boolean[]} isAnswerList
   * @returns
   */
  checkSuccess(isAnswerList) {
    const lastInd = isAnswerList.length - 1;
    if (isAnswerList[lastInd] === true) {
      return CMM_SUCCESS;
    }
    return CMM_FAILURE;
  },
  /**
   * 다리 배열을 형식에 맞게 출력한다.
   * @param {string[]} upperBridge
   * @param {string[]} lowerBridge
   * 
   */
  printBridge(upperBridge, lowerBridge) {
    let upperString = `[${upperBridge.join('|')}]`;
    let lowerString = `[${lowerBridge.join('|')}]`;
    Console.print(upperString);
    Console.print(lowerString);
  },
};

module.exports = OutputView;
