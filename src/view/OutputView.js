const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('../constant/constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  newLine() {
    Console.print(OUTPUT.NEWLINE);
  },

  startMent() {
    Console.print(OUTPUT.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeRecords) {
    const upperBridge = bridgeRecords[0];
    const lowerBridge = bridgeRecords[1];
    Console.print(OUTPUT.UPPER(upperBridge));
    Console.print(OUTPUT.LOWER(lowerBridge));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, tries, bridgeRecords) {
    const upperBridge = bridgeRecords[0];
    const lowerBridge = bridgeRecords[1];
    Console.print(OUTPUT.RESULT_MENT);
    Console.print(OUTPUT.UPPER(upperBridge));
    Console.print(OUTPUT.LOWER(lowerBridge));
    Console.print(OUTPUT.IS_SUCCESS_GAME(result));
    Console.print(OUTPUT.TOTAL_TRIES(tries));
  },
};

module.exports = OutputView;
