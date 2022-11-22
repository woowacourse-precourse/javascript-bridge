/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, GAME_RESULT } = require("../utils/Constants");

const OutputView = {
  startGame() {
    Console.print(`${GAME_MESSAGE.START_GAME}\n`);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeMap) {
    Console.print(`${bridgeMap}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, gameResult) {
    Console.print(GAME_RESULT.RESULT_MESSAGE);
    Console.print(map);
    Console.print(gameResult);
    Console.close();
  },

  printError(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
