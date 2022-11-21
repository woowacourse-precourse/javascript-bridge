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
  printMap(upperBridge, lowerBridge) {
    Console.print(this.divide(upperBridge));
    Console.print(`${this.divide(lowerBridge)}\n`);
  },

  divide(array) {
    return `[${array.join("|")}]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    Console.print("최종 게임 결과\n");
    this.printMap(bridgeGame.upperBridge, bridgeGame.lowerBridge);
    Console.print(`게임 성공 여부: ${bridgeGame.isSuccess ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${bridgeGame.count}`);
  },
};

module.exports = OutputView;
