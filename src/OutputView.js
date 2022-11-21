const { Console } = require('@woowacourse/mission-utils');
const { command } = require('./utils/message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  /**
   * @param {string[]} curBridge 현재까지 건넌 다리 배열
   */
  printMap(curBridge) {
    Console.print(`[ ${curBridge[0].join(' | ')} ]`);
    Console.print(`[ ${curBridge[1].join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.s
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(successMessage, curBridge, tryNum) {
    Console.print(command.RESULT);
    this.printMap(curBridge);
    Console.print(command.IS_SUCCESS(successMessage));
    Console.print(command.TRY_NUM(tryNum));
  },

  printStart() {
    Console.print(command.START);
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
