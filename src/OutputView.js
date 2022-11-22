const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, UP_OR_DOWN, PRINT_MAP } = require('./Constant.js');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameStart() {
    Console.print(GAME_MESSAGE.GAME_START);
  },

  printMap(bridgeGame) {
    Console.print(`[${bridgeGame.nowMap[UP_OR_DOWN.UP].join(PRINT_MAP.DIVISION_LINE)}]`);
    Console.print(`[${bridgeGame.nowMap[UP_OR_DOWN.DOWN].join(PRINT_MAP.DIVISION_LINE)}]`);
  },

  printResult(bridgeGame, result) {
    Console.print(GAME_MESSAGE.END_RESULT);
    OutputView.printMap(bridgeGame);
    Console.print(GAME_MESSAGE.SUCCESS_OR_FAILURE + result);
    Console.print(GAME_MESSAGE.TOTAL_COUNT + bridgeGame.totalCount);

    Console.close()
  },
};

module.exports = OutputView;
