const { Console } = require('@woowacourse/mission-utils');
const { PRINT_MESSAGE } = require('../constants/index.js');
const { newLine } = require('../utils/common.js');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임이 시작될때 출력되는 메세지
   */
  welcomeMessage() {
    Console.print(PRINT_MESSAGE.WELLCOME);
    newLine();
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * 위쪽 다리를 의미하는 문자열, 아래쪽 다리를 문자열을 순서대로 출력한다.
   * @param {StepResult} bridge StepResult Model의 인스턴스.
   */
  printMap(stepResult) {
    Console.print(PRINT_MESSAGE.MAP(stepResult.upperBridge));
    Console.print(PRINT_MESSAGE.MAP(stepResult.lowerBridge));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {boolean} isSuccess 성공 했는지 아닌지를 알려준다.
   * @param {number} retryCount 재시도 횟수
   * @param {StepResult} bridge StepResult Model의 인스턴스.
   */
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
