const { Console } = require('@woowacourse/mission-utils');
const { START_MESSAGE, RESULT_MESSAGE } = require('../utils/message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  printMap(drawBridge) {
    Console.print(drawBridge.upBridge);
    Console.print(drawBridge.downBridge + '\n');
  },

  printResult(drawBridge, result, attemps) {
    Console.print(RESULT_MESSAGE.finalGameResult);
    Console.print(drawBridge.upBridge);
    Console.print(drawBridge.downBridge + '\n');
    Console.print(RESULT_MESSAGE.crossingResult(result));
    Console.print(RESULT_MESSAGE.totalNumberOfAttempts(attemps));
  },

  printStartAnnouncement() {
    Console.print(START_MESSAGE);
  },

  printErrorMessage(error) {
    Console.print(error);
  },

  printLineBreak() {
    Console.print('');
  },
};

module.exports = OutputView;
