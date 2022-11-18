const OutputView = require('./OutputView');
const Validate = require('./Validate');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR, KEY } = require('./Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.BRIDGE_SIZE, (size) => {
      try {
        const SIZE = Number(size);
        if (Validate.checkBridgeSize(SIZE)) {
          bridgeGame.getAnswerBridge(SIZE);
          this.readMoving(bridgeGame);
        } else {
          throw new Error(ERROR.BRIDGE_SIZE);
        }
      } catch (error) {
        OutputView.printError(error.message);
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MESSAGE.MOVING_KEY, (key) => {
      try {
        if (Validate.checkMovingKey(key)) {
          const USER_BRIDGE = bridgeGame.move(key);
          OutputView.printMap(USER_BRIDGE);
        } else {
          throw new Error(ERROR.MOVING_KEY);
        }
      } catch (error) {
        OutputView.printError(error.message);
        this.readMoving(bridgeGame);
      }
      if (
        Validate.checkUserInput(bridgeGame.userInput, bridgeGame.answerBridge)
      ) {
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
      try {
        if (!Validate.checkCommandKey(key)) {
          throw new Error(ERROR.GAME_COMMAND);
        }
      } catch (error) {
        OutputView.printError(error.message);
      }
      if (key === KEY.RETRY) {
        bridgeGame.retry();
        this.readMoving(bridgeGame);
      }
      if (key === KEY.END) {
        OutputView.printResult(bridgeGame, '실패');
      }
    });
  },
};

module.exports = InputView;
