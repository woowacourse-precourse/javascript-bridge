/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./Constant");
const { Console } = MissionUtils;

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movingList) {
    const [up, down] = movingList;
    Console.print(`[ ${up.join(" | ")} ]`);
    Console.print(`[ ${down.join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, bridgeGame) {
    const [movingList, gameCount] = bridgeGame.getTotal();
    Console.print(INPUT_MESSAGE.result);
    this.printMap(movingList);
    Console.print(INPUT_MESSAGE.isSuccess(result));
    Console.print(INPUT_MESSAGE.allCount(gameCount));
    Console.close();
  },
};

module.exports = OutputView;
