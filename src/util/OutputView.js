const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./Constant");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 메시지를 출력한다.
   */
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {object} game 다리 건너기 게임을 관리하는 객체
   *
   */
  printMap(game) {
    const { upRoad, downRoad } = game.getRoadStates();
    Console.print(upRoad);
    Console.print(downRoad);
    Console.print("");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {object} game 다리 건너기 게임을 관리하는 객체
   */
  printResult(game) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    OutputView.printMap(game);
    Console.print(OUTPUT_MESSAGE.GAME_SUCCESS_OR_NOT(game.isArrive()));
    Console.print(OUTPUT_MESSAGE.TOTAL_NUMBER_OF_TRY(game.getTryCount()));
    Console.close();
  },
};

module.exports = OutputView;
