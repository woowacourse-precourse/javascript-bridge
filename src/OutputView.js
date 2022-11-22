const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_DELIMETER } = require("./util/bridge");
const { CONSOLE_MESSAGE } = require("./util/messages");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(CONSOLE_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(firstLineResult, secondLineResult, isFinal) {
    if (isFinal) {
      Console.print(CONSOLE_MESSAGE.finalResult);
    }
    Console.print(
      BRIDGE_DELIMETER.wrapper(firstLineResult.join(BRIDGE_DELIMETER.delimeter))
    );
    Console.print(
      BRIDGE_DELIMETER.wrapperln(
        secondLineResult.join(BRIDGE_DELIMETER.delimeter)
      )
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isComplete, tryCount) {
    Console.print(CONSOLE_MESSAGE.finalCompleteNTry(isComplete, tryCount));
    Console.close();
  },
};

module.exports = OutputView;
