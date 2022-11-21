const { Console } = require("@woowacourse/mission-utils");
const { NOTICE, SUCCESS, FAILURE } = require("./constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작을 알리는 문구를 출력한다.
   */
  printStartingMessage() {
    Console.print(NOTICE.START_GAME);
  },

  printEndingMessage() {
    Console.print(NOTICE.END_GAME);
  },

  /**
   * 입력이 올바르지 않음을 알리는 문구를 출력한다.
   */
  printInputErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    const gameMap = bridgeGame.getMap();
    gameMap.forEach((rowMap) => {
      Console.print(`[ ${rowMap.join(" | ")} ]`);
    });
  },

  printClear(bridgeGame) {
    const isClear = bridgeGame.isClear();
    Console.print(`\n게임 성공 여부: ${isClear ? SUCCESS : FAILURE}`);
  },

  printRunCount(bridgeGame) {
    const runCount = bridgeGame.getRunCount();
    Console.print(`총 시도한 횟수: ${runCount}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    OutputView.printEndingMessage();
    OutputView.printMap(bridgeGame);
    OutputView.printClear(bridgeGame);
    OutputView.printRunCount(bridgeGame);
  },
};

module.exports = OutputView;
