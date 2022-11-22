const { Console } = require('@woowacourse/mission-utils');
const { Survived, Tile } = require('../constants');
const BridgeGame = require('../domains/BridgeGame');
const Messages = require('../intl/Messages');
const Moving = require('../domains/Moving');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printWelcome() {
    Console.print(Messages.WELCOME);
  },

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
        if (moving.isSurvived()) return Survived.YES;
        return Survived.NO;
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
    Console.print('');
    Console.print(Messages.RESULT_TITLE);
    this.printMap(bridgeGame);

    Console.print('');
    const result = bridgeGame.isArrived() ? Messages.RESULT_SUCCESS : Messages.RESULT_FAIL;
    Console.print(Messages.format(Messages.RESULT_GAME_RESULT, result));
    Console.print(Messages.format(Messages.RESULT_GAME_TRIAL_COUNT, bridgeGame.getTrialCount()));
  },
};

module.exports = OutputView;
