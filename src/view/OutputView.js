const { Console } = require('@woowacourse/mission-utils');
const { PRINT_MESSAGE } = require('../constants/index.js');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  welcomeMessage() {
    Console.print(PRINT_MESSAGE.WELLCOME);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(stepResult) {
    Console.print(PRINT_MESSAGE.MAP(stepResult.upperBridge));
    Console.print(PRINT_MESSAGE.MAP(stepResult.lowerBridge));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, retryCount, bridge) {
    const gameResult = isSuccess ? PRINT_MESSAGE.SUCCESS : PRINT_MESSAGE.FAIL;
    Console.print(PRINT_MESSAGE.RESULT_INFORMATION);
    this.printMap(bridge);
    Console.print('');
    Console.print(PRINT_MESSAGE.GAME_RESULT(gameResult));
    Console.print(PRINT_MESSAGE.TRY_COUNT(retryCount));
    Console.close();
  },
};

module.exports = OutputView;
