const OutputView = require('./OutputView');
const Validate = require('./Validate');
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
      const SIZE = Number(size);
      if (Validate.checkBridgeSize(SIZE)) {
        bridgeGame.getAnswerBridge(SIZE);
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
      if (Validate.checkMovingKey(key)) {
        bridgeGame.move(key);
        OutputView.printMap(bridgeGame.getUserBridge());
      } else {
        this.readMoving(bridgeGame);
      }
      if (bridgeGame.isSuccess()) {
        return OutputView.printResult(bridgeGame, '성공');
      }
      if (bridgeGame.getMoveResult(key) === 'O') {
        this.readMoving(bridgeGame);
      } else {
        this.readGameCommand(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(MESSAGE.GAME_COMMAND, (key) => {
      if (!Validate.checkCommandKey(key)) {
        return this.readGameCommand(bridgeGame);
      }
      if (bridgeGame.isRetry(key)) {
        this.readMoving(bridgeGame);
      } else {
        OutputView.printResult(bridgeGame, '실패');
      }
    });
  },
};

module.exports = InputView;
