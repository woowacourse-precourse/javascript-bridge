const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./utils/Message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart () {
    Console.print(MESSAGE.gameStart);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap (history) {
    Console.print(`[ ${history.up.join(' | ')} ]`);
    Console.print(`[ ${history.down.join(' | ')} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult (success, history, tryCount) {
    Console.print(MESSAGE.gameResult);
    this.printMap(history);
    Console.print(MESSAGE.gameCheckSuccess
      + success ? MESSAGE.successMessage : MESSAGE.failMessage);
    Console.print(MESSAGE.gameCheckTryCount + tryCount);
    Console.close();
  },

  printError (error) {
    Console.print(error.message);
  },
};

module.exports = OutputView;
