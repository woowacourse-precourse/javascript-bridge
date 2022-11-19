const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(MESSAGE.PRINT_MISSION_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upDownArray) {
    Console.print(upDownArray[0]);
    Console.print(upDownArray[1]);
    Console.print('\n');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(array) {
    Console.print(MESSAGE.OUTPUT_TEXT);
    this.printMap([array[0], array[1]]);
    Console.print(MESSAGE.OUTPUT_RESULT(array[2], array[3]));
    Console.close();
  },
};

module.exports = OutputView;
