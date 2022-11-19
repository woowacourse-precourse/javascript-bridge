const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/Messages');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
  printNewLine() {
    Console.print(OUTPUT_MESSAGE.new_line);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ upBridge, downBridge }) {
    Console.print(`[ ${upBridge.join(' | ')} ]`);
    Console.print(`[ ${downBridge.join(' | ')} ]`);
    OutputView.printNewLine();
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ bridge, count, result }) {
    Console.print(OUTPUT_MESSAGE.result);
    OutputView.printMap(bridge);
    Console.print(OUTPUT_MESSAGE.success_faliure(result));
    Console.print(OUTPUT_MESSAGE.attempts_count(count));
    Console.close();
  },
};

module.exports = OutputView;
