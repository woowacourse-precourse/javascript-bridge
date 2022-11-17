const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  makeCellElement(input, idx) {
    if (this.target === input && this.bridge[idx] === input) return "O";
    if (this.target === input && this.bridge[idx] !== input) return "X";
    return " ";
  },
  makeBridgeString(bridge, inputs, target) {
    const bridgeMap = inputs.map(OutputView.makeCellElement, {
      bridge,
      target,
    });
    return `[ ${bridgeMap.join(" | ")} ]`;
  },
  printMap(bridge, inputs) {
    const upperBridgeString = OutputView.makeBridgeString(bridge, inputs, "U");
    const lowerBridgeString = OutputView.makeBridgeString(bridge, inputs, "D");
    Console.print(upperBridgeString);
    Console.print(lowerBridgeString);
    Console.close();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

OutputView.printMap(["U", "D", "U"], ["U", "D", "U"]);

module.exports = OutputView;
