const { Console, Random } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, input) {
    let [upper, lower] = this.getBridgeArray(bridge, input);
    Console.print(`[${upper.join("|")}]`);
    Console.print(`[${lower.join("|")}]`);
    Console.print("");
  },
  getBridgeArray(bridge, input) {
    let mapResult = [[], []];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "U" && bridge[i] === "U") {
        mapResult[0].push(" O ");
        mapResult[1].push("   ");
      }
      if (input[i] === "D" && bridge[i] === "D") {
        mapResult[0].push("   ");
        mapResult[1].push(" O ");
      }
      if (input[i] === "U" && bridge[i] === "D") {
        mapResult[0].push(" X ");
        mapResult[1].push("   ");
      }
      if (input[i] === "D" && bridge[i] === "U") {
        mapResult[0].push("   ");
        mapResult[1].push(" X ");
      }
    }
    return mapResult;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, result) {
    Console.print("최종 게임 결과");
    this.printMap(bridgeGame.bridgeArray, bridgeGame.moveInput);
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${bridgeGame.gameRetryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
