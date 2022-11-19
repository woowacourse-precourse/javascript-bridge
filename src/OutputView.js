const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constant/message");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.START_GAME + "\n");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(position, bridge, answer) {
    Console.print(this.printUpBridge(position, bridge, answer));
    Console.print(this.printDownBridge(position, bridge, answer));
  },

  printUpBridge(position, bridge, answer) {
    const upBridge = bridge.slice(0, position).map((cell) => {
      if (cell === "U" && answer === "U") return "O";
      if (cell !== "U" && answer === "U") return "X";

      return " ";
    });

    return `[ ${upBridge.join(" | ")} ]`;
  },

  printDownBridge(position, bridge, answer) {
    const downBridge = bridge.slice(0, position).map((cell) => {
      if (cell === "D" && answer === "D") return "O";
      if (cell !== "D" && answer === "D") return "X";

      return " ";
    });

    return `[ ${downBridge.join(" | ")} ]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
