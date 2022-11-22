const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("../constants/Messages.js");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 시작 메세지를 출력한다.
   */
  printStartMessage() {
    Console.print(PRINT_MESSAGE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} upBridge 위의 Bridge Marking Map
   * @param {string[]} downBridge 아래의 Bridge Marking Map
   */
  printMap(upBridge, downBridge) {
    Console.print(PRINT_MESSAGE.MAP(upBridge, downBridge));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {map[]} map [upBridge, downBridge] 형식.
   * @param {string} isSuccess "실패" Or "성공"
   * @param {number} attempt 총 게임 시도 횟수
   */
  printResult(map, isSuccess, attempt) {
    Console.print(PRINT_MESSAGE.RESULT);
    this.printMap(map[0], map[1]);
    Console.print(PRINT_MESSAGE.IS_SUCCESS(isSuccess));
    Console.print(PRINT_MESSAGE.ATTEMPT(attempt));
    Console.close();
  },

  /**
   * 에러 메세지를 출력한다.
   * @param {string} error 에러 메세지
   */
  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
