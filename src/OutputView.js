const { Console } = require("@woowacourse/mission-utils");
const { RESULT_MESSAGE } = require("./Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ bridgeTop, bridgeBottom }) {
    Console.print(bridgeTop);
    Console.print(bridgeBottom);
  },

  makeMap({ bridgeTop, bridgeBottom }) {
    const top = "[ " + bridgeTop.join(" | ") + " ]";
    const bottom = "[ " + bridgeBottom.join(" | ") + " ]";
    this.printMap({ bridgeTop: top, bridgeBottom: bottom });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ gameResult, gametry }) {
    Console.print(RESULT_MESSAGE.successInfo + gameResult);
    Console.print(RESULT_MESSAGE.tryCount + gametry);
    this.closeConsole();
  },

  printMessage(message) {
    Console.print(message);
  },

  closeConsole() {
    Console.close();
  },
};

module.exports = OutputView;
