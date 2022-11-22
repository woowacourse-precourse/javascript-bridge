const { Console } = require('@woowacourse/mission-utils');
const { Tile } = require('../constants');
const BridgeGame = require('../domains/BridgeGame');
const Moving = require('../domains/Moving');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   *
   * @param {BridgeGame} bridgeGame
   */
  printMap(bridgeGame) {
    const movingHistory = bridgeGame.getMovingHistory();
    Object.values(Tile).forEach((tile) => {
      Console.print(this.getMapLine(tile, movingHistory));
    });
  },

  /**
   * @param {string} tile
   * @param {Moving[]} movingHistory
   * @returns {string}
   */
  getMapLine(tile, movingHistory) {
    return `[${movingHistory
      .map((moving) => {
        if (moving.getTile() !== tile) return ' ';
        if (moving.isSurvived()) return 'O';
        return 'X';
      })
      .map((tileDisplay) => ` ${tileDisplay} `)
      .join('|')}]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   *
   * @param {BridgeGame} bridgeGame
   */
  printResult(bridgeGame) {
    Console.print('최종 게임 결과');
    this.printMap(bridgeGame);

    const result = bridgeGame.isArrived() ? '성공' : '실패';
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${bridgeGame.getTrialCount()}`);
  },
};

module.exports = OutputView;
