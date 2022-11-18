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
  printMap(currentBridge, check) {
    let upBridge = [];
    let downBridge = [];
    upBridge, downBridge = this.pushBridge(currentBridge, upBridge, downBridge);
    this.lastCheck(upBridge, downBridge, check);
    Console.print(`[ ${upBridge.join(" | ")} ]`);
    Console.print(`[ ${downBridge.join(" | ")} ]`);
  },

  pushBridge(currentBridge, upBridge, downBridge) {
    for (let i=0; i < currentBridge.length; i++) {
      if (currentBridge[i] === "U") {
        upBridge.push("O");
        downBridge.push(" ");
      }
      if (currentBridge[i] === "D") {
        upBridge.push(" ");
        downBridge.push("O");
      }
    }
    return upBridge, downBridge
  },

  lastCheck(upBridge, downBridge, check) {
    if (check === "X" && upBridge[upBridge.length - 1] === "O") {
      upBridge.pop();
      upBridge.push("X");
    }
    if (check === "X" && downBridge[downBridge.length - 1] === "O") {
      downBridge.pop();
      downBridge.push("X");
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
