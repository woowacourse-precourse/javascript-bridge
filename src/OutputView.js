const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./constants/message");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movingLog) {
    const upperLog = movingLog.upper.join(" | ");
    const lowerLog = movingLog.lower.join(" | ");
    Console.print(`[ ${upperLog} ]`);
    Console.print(`[ ${lowerLog} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(message, movingLog, attemptNumber) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    this.printMap(movingLog);
    Console.print(message);
    Console.print(`총 시도한 횟수: ${attemptNumber}`);
    Console.close();
  },
};

module.exports = OutputView;
