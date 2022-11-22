const { Console } = require('@woowacourse/mission-utils');
const { PRINT_MESSAGE } = require('../constants/index.js');
const { newLine } = require('../utils/common.js');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  welcomeMessage() {
    Console.print(PRINT_MESSAGE.WELLCOME);
  },

  printMap(stepResult) {
    Console.print(PRINT_MESSAGE.MAP(stepResult.upperBridge));
    Console.print(PRINT_MESSAGE.MAP(stepResult.lowerBridge));
  },

  printResult(isSuccess, retryCount, bridge) {
    const gameResult = isSuccess ? PRINT_MESSAGE.SUCCESS : PRINT_MESSAGE.FAIL;
    newLine();
    Console.print(PRINT_MESSAGE.RESULT_INFORMATION);
    this.printMap(bridge);
    newLine();
    Console.print(PRINT_MESSAGE.GAME_RESULT(gameResult));
    Console.print(PRINT_MESSAGE.TRY_COUNT(retryCount));
    Console.close();
  },
};

module.exports = OutputView;
