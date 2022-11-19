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
  printMap(currentBridge, isCorrect) {
    let upBridge = [];
    let downBridge = [];
    upBridge, downBridge = this.pushBridge(currentBridge, upBridge, downBridge);
    this.lastCheck(upBridge, downBridge, isCorrect);
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

  lastCheck(upBridge, downBridge, isCorrect) {
    if (isCorrect === "wrong" && upBridge[upBridge.length - 1] === "O") {
      upBridge.pop();
      upBridge.push("X");
    }
    if (isCorrect === "wrong" && downBridge[downBridge.length - 1] === "O") {
      downBridge.pop();
      downBridge.push("X");
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(currentBridge, isCorrect) {
    Console.print("최종 게임 결과");
    this.printMap(currentBridge, isCorrect);
    Console.print(`게임 성공 여부: ${this.print(isCorrect)}`)
  },

  print(isSuccess) {
    if (isSuccess === "correct") return "성공";
    if (isSuccess === "wrong") return "실패";
  }
};

module.exports = OutputView;
