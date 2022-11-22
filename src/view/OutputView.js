/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const { CURRENT_MAP } = require('../constants/game.constants');
const { OUTPUT_MESSAGE } = require('../constants/message.constants');

const OutputView = {
  // 게임 시작 메시지를 출력하는 메서드
  printStart() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력하는 메서드
   * @param {string[]} up 플레이어가 이동한 다리 현황 중 윗쪽 다리 배열
   * @param {string[]} down 플레이어가 이동한 다리 현황 중 아랫쪽 다리 배열
   */
  printMap(currentMap) {
    const up = currentMap[0];
    const down = currentMap[1];
    Console.print(CURRENT_MAP.SHOW(up, down));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력하는 메서드
   * @param {string[][]} currentMap 플레이어가 이동한 다리 현황을 저장한 2차원 배열
   * @param {string} gameResult 플레이어의 게임 성공 여부에 대한 문자열('성공' 또는 '실패')
   * @param {number} gameCount 플레이어의 총 시도 횟수
   */
  printResult(currentMap, gameResult, gameCount) {
    Console.print(OUTPUT_MESSAGE.FINAL);
    this.printMap(currentMap);
    Console.print(OUTPUT_MESSAGE.TOTAL_RESULT(gameResult, gameCount));
    Console.close();
  },

  /**
   * 에러를 출력하는 메서드
   * @param {error} error 게임 진행 중 발생한 에러
   */
  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
