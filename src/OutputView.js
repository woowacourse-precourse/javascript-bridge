const { Console } = require("@woowacourse/mission-utils");
const { INFO_MESSAGE } = require("./utils/constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printStart() {
    Console.print(INFO_MESSAGE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    Console.print(`[${bridge.up.join(", ").replaceAll(", ", "|")}]`);
    Console.print(`[${bridge.down.join(", ").replaceAll(", ", "|")}]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(tried, success) {
    success
      ? Console.print(INFO_MESSAGE.SUCCESS)
      : Console.print(INFO_MESSAGE.FAIL);
    Console.print(INFO_MESSAGE.TRY(tried));
    Console.close();
  },
  resultMessage() {
    Console.print(INFO_MESSAGE.RESULT);
  },
};

module.exports = OutputView;
