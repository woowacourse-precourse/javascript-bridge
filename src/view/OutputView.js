const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('../utils/constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 개행을 출력한다.
   */
  newLine() {
    Console.print(OUTPUT.NEWLINE);
  },

  /**
   * 게임 시작 안내문을 출력한다.
   */
  startMent() {
    Console.print(OUTPUT.START);
  },

  /**
   * 발생한 에러를 출력한다
   * @param {error} 발생한 에러 객체
   */
  printError(error) {
    Console.print(error);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridgeRecords 사용자가 움직인 칸의 기록
   */
  printMap(bridgeRecords) {
    const upperBridge = bridgeRecords[0];
    const lowerBridge = bridgeRecords[1];
    Console.print(OUTPUT.UPPER(upperBridge));
    Console.print(OUTPUT.LOWER(lowerBridge));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {string} result 게임 성공 여부
   * @param {number} tries 게임 총 시도 횟수
   * @param {string[]} bridgeRecords 사용자가 움직인 칸의 기록
   */
  printResult(result, tries, bridgeRecords) {
    const upperBridge = bridgeRecords[0];
    const lowerBridge = bridgeRecords[1];
    Console.print(OUTPUT.RESULT_MENT);
    Console.print(OUTPUT.UPPER(upperBridge));
    Console.print(OUTPUT.LOWER(lowerBridge));
    Console.print(OUTPUT.IS_SUCCESS_GAME(result));
    Console.print(OUTPUT.TOTAL_TRIES(tries));
  },
};

module.exports = OutputView;
