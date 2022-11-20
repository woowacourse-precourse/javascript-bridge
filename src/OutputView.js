const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(drawBridge) {
    Console.print(`[ ${drawBridge[0]} ]`);
    Console.print(`[ ${drawBridge[1]} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(drawBridge, result, attemps) {
    Console.print('최종 게임 결과');
    Console.print(`[ ${drawBridge[0]} ]`);
    Console.print(`[ ${drawBridge[1]} ]\n`);
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
