const { Console } = require('@woowacourse/mission-utils');
const { STEP, MESSAGE } = require('./constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printSide(line) {
    let printSide = '[ ' + line.join(' | ') + ' ]';
    Console.print(printSide);
  },

  printMap(bridgeGame) {
    this.printSide(bridgeGame.getSide(STEP.UP));
    this.printSide(bridgeGame.getSide(STEP.DOWN));
    Console.print('');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    Console.print(MESSAGE.RESULT);
    this.printMap(bridgeGame);
    Console.print(`${MESSAGE.SUCCESS_OR_FAIL} ${bridgeGame.getResult()}`);
    Console.print(`${MESSAGE.TRY_COUNT} ${bridgeGame.getTryCount()}`);
  },
};

module.exports = OutputView;
