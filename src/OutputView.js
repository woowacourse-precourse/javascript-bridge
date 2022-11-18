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
  printMap(inputMoves, moveResult) {
    inputMoves.length <= 1
      ? this.makeMap(inputMoves, moveResult)
      : this.makeMaps(inputMoves, moveResult);
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
  makeMaps(inputMoves, moveResult) {
    let upBridge = [];
    let downBridge = [];
    for (let i = 0; i < inputMoves.length; i++) {
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
  printResult(moves, moveResult, tryCount) {
    Console.print(MESSAGE.RESULT_MESSAGE);
    this.printMap(moves, moveResult);
    const isSuccess = moveResult.every((ele) => ele === "O") ? "성공" : "실패";
    Console.print(`${MESSAGE.SUCCESS_CHECK_MESSAGE}${isSuccess}`);
    Console.print(`${MESSAGE.TRY_COUNT_MESSAGE}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
