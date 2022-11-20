const { Console } = require("@woowacourse/mission-utils");
const { RESULT_MESSAGES } = require("./constant");
const GameInfo = require("./GameInfo");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  changeSuccess: "성공",

  printMessage(message) {
    Console.print(message);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    GameInfo.moveBridge.forEach((bridge) => {
      Console.print(`[ ${bridge.join(' | ')} ]`);
    });
  },

  printSuccess() {
    GameInfo.gameResult = this.changeSuccess;
    this.printResult();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(RESULT_MESSAGES.finalResult);
    this.printMap();
    Console.print(RESULT_MESSAGES.gameResult(GameInfo.gameResult));
    Console.print(RESULT_MESSAGES.tryCount(GameInfo.numberOfPlayGames));
    Console.close();
  },
};

module.exports = OutputView;
