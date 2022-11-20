const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 문구를 출력한다.
   */
  printGameStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  /**
   * 예외 상황 시 에러 문구를 출력한다.
   * @param {string} errorMessage
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {Array<string[]>} bridgeMap 현재까지 이동한 다리의 상태
   */
  printMap([upperMap, lowerMap]) {
    Console.print(`[ ${upperMap.join(' | ')} ]`);
    Console.print(`[ ${lowerMap.join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {Array<string[]>} bridgeMap 현재까지 이동한 다리의 상태
   * @param {boolean} isClear 게임의 성공 여부
   * @param {number} totalTryCount 게임의 총 시도 횟수
   */
  printResult({ bridgeMap, isClear, totalTryCount }) {
    Console.print('최종 게임 결과');
    this.printMap(bridgeMap);
    Console.print(`\n게임 성공 여부: ${isClear === true ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${totalTryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
