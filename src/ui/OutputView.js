const { Console } = require('@woowacourse/mission-utils');
const { CMM_START } = require('../constant/Comment');
const { BRIDGE_END, BRIDGE_START, UP, DOWN } = require('../constant/constants');

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
    let upperStr = BRIDGE_START;
    let lowerStr = BRIDGE_START;
    for (let i = 0; i < userInputString.length; i++) {
      if (userInputString[i] === UP) {
        upperStr += isAnswerList[i] ? ' O |' : ' X |';
        lowerStr += '   |';
      } else if (userInputString[i] === DOWN) {
        lowerStr += isAnswerList[i] ? ' O |' : ' X |';
        upperStr += '   |';
      }
    }
    upperStr += BRIDGE_END;
    lowerStr += BRIDGE_END;
    Console.print(upperStr);
    Console.print(lowerStr);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isAnswerList, userInputString, tryNum) {
    Console.print('최종 게임 결과');
    this.printMap(isAnswerList, userInputString);
    Console.print('게임 성공 여부: ' + this.checkSuccess(isAnswerList, userInputString));
    Console.print('총 시도한 횟수: ' + tryNum);
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
      return '성공';
    }
    return '실패';
  },
};

module.exports = OutputView;
