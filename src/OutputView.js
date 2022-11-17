const { Console } = require('@woowacourse/mission-utils');
const { GAME_STATUS } = require('./constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  /**
   * @param {string} resultToString 다리 건너기 결과 문자열
   */
  printMap(resultToString) {
    Console.print(resultToString);
    Console.print('');
  },

  /**
   * @param {string} resultToString 다리 건너기 결과 문자열
   * @param {number} gameStatus 다리 건너기 게임의 상태
   * @param {number} count 시도 횟수
   */
  printResult(resultToString, gameStatus, count) {
    Console.print('최종 게임 결과');
    OutputView.printMap(resultToString);
    Console.print(`게임 성공 여부: ${gameStatus === GAME_STATUS.OVER ? '실패' : '성공'}`);
    Console.print(`총 시도한 횟수: ${count}`);
  },

  printLineBreak() {
    Console.print('');
  },
};

module.exports = OutputView;
