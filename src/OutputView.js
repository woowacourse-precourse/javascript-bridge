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

  printMap(currentBridge) {
    const bridgeMap = ["[", "["];
    for (let i = 0; i < currentBridge.length; i++) {
      if (currentBridge[i][0] === "U") {
        bridgeMap[0] += ` ${currentBridge[i][1]} |`;
        bridgeMap[1] += "   |";
      }
      if (currentBridge[i][0] === "D") {
        bridgeMap[0] += "   |";
        bridgeMap[1] += ` ${currentBridge[i][1]} |`;
      }
    }

    bridgeMap[0] = bridgeMap[0].substring(0, bridgeMap[0].length - 1);
    bridgeMap[1] = bridgeMap[1].substring(0, bridgeMap[1].length - 1);

    bridgeMap[0] += "]";
    bridgeMap[1] += "]";

    Console.print(bridgeMap[0]);
    Console.print(bridgeMap[1]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(state, round, currentBridge) {
    Console.print("최종 게임 결과");
    if (state === "성공") {
      this.printMap(currentBridge);
    }
    if (state === "실패") {
      this.printMap(currentBridge);
    }

    Console.print(`게임 성공 여부: ${state}`);
    Console.print(`총 시도한 횟수: ${round}`);
  },
};

module.exports = OutputView;
