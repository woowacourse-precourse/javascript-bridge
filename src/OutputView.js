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
    const upBridge = bridge.slice(0, position).map((cell) => (cell === "U" ? "O" : " "));

    if (bridge[position] === "U" && answer === "U") upBridge.push("O");

    if (bridge[position] !== "U" && answer === "U") upBridge.push("X");

    if (answer !== "U") upBridge.push(" ");

    return `[ ${upBridge.join(" | ")} ]`;
  },

  printDownBridge(position, bridge, answer) {
    const downBridge = bridge.slice(0, position).map((cell) => (cell === "D" ? "O" : " "));

    if (bridge[position] === "D" && answer === "D") downBridge.push("O");

    if (bridge[position] !== "D" && answer === "D") downBridge.push("X");

    if (answer !== "D") downBridge.push(" ");

    return `[ ${downBridge.join(" | ")} ]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(position, bridge) {
    Console.print(MESSAGE.GAME_RESULT);
    this.printMap(position, bridge, answer);
  },
};

module.exports = OutputView;
