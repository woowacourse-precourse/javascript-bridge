const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(inputMoves, callMove, moveResult) {
    callMove <= 1
      ? this.makeMap(inputMoves, moveResult)
      : this.makeMaps(inputMoves, callMove, moveResult);
  },
  makeMap(inputMoves, moveResult) {
    let upBridge = "[ ";
    let downBridge = "[ ";
    if (inputMoves[0] === "U") {
      upBridge += moveResult[0] + " ]";
      downBridge += "  ]";
    }
    if (inputMoves[0] === "D") {
      downBridge += moveResult[0] + " ]";
      upBridge += "  ]";
    }
    Console.print(`${upBridge}\n${downBridge}`);
  },
  makeMaps(inputMoves, callMove, moveResult) {
    let upBridge = [];
    let downBridge = [];
    for (let i = 0; i < callMove; i++) {
      if (inputMoves[i] === "U") {
        upBridge.push(moveResult[i]);
        downBridge.push(" ");
      }
      if (inputMoves[i] === "D") {
        downBridge.push(moveResult[i]);
        upBridge.push(" ");
      }
    }
    upBridge = upBridge.join(" | ");
    downBridge = downBridge.join(" | ");
    Console.print(`${"[ " + upBridge + " ]"}\n${"[ " + downBridge + " ]"}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
