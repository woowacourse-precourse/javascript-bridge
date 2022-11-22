const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG, COMMON, GAME_RESULT } = require('../common/Constant');
const { success, fail } = GAME_RESULT;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string} movingState 게임 상태
   */
  printMap(movingState) {
    Console.print(movingState + COMMON.newLine);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {boolean} isSuccess 게임 성공 여부
   * @param {number} tryCnt 시도한 횟수
   */
  printResult(isSuccess, tryCnt) {
    Console.print(GAME_MSG.successOrNot + (isSuccess ? success : fail));
    Console.print(GAME_MSG.totalTryCount + tryCnt);
    Console.close();
  },

  /**
   * 게임 시작 메세지를 출력한다.
   */
  printGameStart() {
    Console.print(GAME_MSG.start + COMMON.newLine);
  },

  /**
   * 게임 종료 메세지를 출력한다.
   */
  printGameEnd() {
    Console.print(GAME_MSG.result);
  },

  /**
   * 에러 메세지를 출력한다.
   * @param {string} error
   */
  printError(error) {
    Console.print(error);
  },

  /**
   * 출력시 한 줄 개행 해준다.
   */
  printNewLine() {
    Console.print('');
  },
};

module.exports = OutputView;
