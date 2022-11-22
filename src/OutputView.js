const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, inputBridge) {
    var upDown = ["U", "D"];
    var downUp = ["D", "U"];
    MissionUtils.Console.print(this.printBridge(bridge, inputBridge, upDown));
    MissionUtils.Console.print(this.printBridge(bridge, inputBridge, downUp));
  },
  printBridge(bridge, inputBridge, direction) {
    var bridgeOrder = "[ ";
    for (let i = 0; i < inputBridge.length; i++) {
      bridgeOrder += this.printOX(bridge[i], inputBridge[i], direction);
      if (inputBridge.length - 1 > i) {
        bridgeOrder += "| ";
      }
    }
    bridgeOrder += "]";
    return bridgeOrder;
  },
  printOX(bridge, inputBridge, direction) {
    if (inputBridge && bridge == direction[0]) {
      return "O ";
    } else if (!inputBridge && bridge == direction[1]) {
      return "X ";
    }
    return "  ";
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, inputBridge) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(bridge, inputBridge);
    if (bridge.length == inputBridge.length && !inputBridge.includes(false))
      MissionUtils.Console.print("게임 성공 여부: 성공");
    else if (
      bridge.length != inputBridge.length &&
      inputBridge.includes(false)
    ) {
      MissionUtils.Console.print("게임 성공 여부: 실패");
    }
  },
};

module.exports = OutputView;
