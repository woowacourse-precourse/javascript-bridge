const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, UP_OR_DOWN, PRINT_MAP, RESULT_KOREAN, RESULT_ENGLISH } = require('./Constant.js');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 멘트를 출력한다.
   */
  gameStart() {
    Console.print(GAME_MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    Console.print(`[${bridgeGame.nowMap[UP_OR_DOWN.UP].join(PRINT_MAP.DIVISION_LINE)}]`);
    Console.print(`[${bridgeGame.nowMap[UP_OR_DOWN.DOWN].join(PRINT_MAP.DIVISION_LINE)}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, result) {
    const strResult = result === RESULT_ENGLISH.SUCCESS ? RESULT_KOREAN.SUCCESS : RESULT_KOREAN.FAIL;

    Console.print(GAME_MESSAGE.END_RESULT);
    OutputView.printMap(bridgeGame);
    Console.print(GAME_MESSAGE.SUCCESS_OR_FAILURE + strResult);
    Console.print(GAME_MESSAGE.TOTAL_COUNT + bridgeGame.totalCount);

    Console.close()
  },
};

module.exports = OutputView;
