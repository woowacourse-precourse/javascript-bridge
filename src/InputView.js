const InputValueHandler = require('./InputValueHandler');
const OutputView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.BRIDGE_SIZE, (size) => {
      if (InputValueHandler.bridgeSize(size, bridgeGame)) {
        this.readMoving(bridgeGame);
      } else {
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MESSAGE.MOVING_KEY, (key) => {
      if (!InputValueHandler.movingKey(key, bridgeGame)) {
        return this.readMoving(bridgeGame);
      }
      if (InputValueHandler.checkSuccess(bridgeGame)) return;
      if (InputValueHandler.checkMoveResult(key, bridgeGame)) {
        return this.readMoving(bridgeGame);
      }
      return this.readGameCommand(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(MESSAGE.GAME_COMMAND, (key) => {
      if (InputValueHandler.gameCommand(key, bridgeGame)) {
        return this.readMoving(bridgeGame);
      }
      if (!InputValueHandler.checkRetry(key, bridgeGame)) {
        return OutputView.printResult(bridgeGame, '실패');
      }
      return this.readGameCommand(bridgeGame);
    });
  },
};

module.exports = InputView;
