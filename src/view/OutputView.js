const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  printMap(drawBridge) {
    Console.print(drawBridge.upBridge);
    Console.print(drawBridge.downBridge + '\n');
  },

  printResult(drawBridge, result, attemps) {
    Console.print('최종 게임 결과');
    Console.print(drawBridge.upBridge);
    Console.print(drawBridge.downBridge + '\n');
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${attemps}`);
  },

  printStartAnnouncement() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printErrorMessage(error) {
    Console.print(error);
  },

  printLineBreak() {
    Console.print('');
  },
};

module.exports = OutputView;
