const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR, KEY } = require('./Constants');
const {
  checkBridgeSize,
  checkMovingKey,
  checkCommandKey,
  checkUserInput,
} = require('./Validate');

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
      if (checkBridgeSize(SIZE)) {
        bridgeGame.answerBridge = BridgeMaker.makeBridge(
          SIZE,
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving(bridgeGame);
      } else {
        throw new Error(ERROR.BRIDGE_SIZE);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MESSAGE.MOVING_KEY, (key) => {
      if (checkMovingKey(key)) {
        const USER_BRIDGE = bridgeGame.move(key);
        OutputView.printMap(USER_BRIDGE);
      } else {
        throw new Error(ERROR.MOVING_KEY);
      }
      if (checkUserInput(bridgeGame.userInput, bridgeGame.answerBridge)) {
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
      if (!checkCommandKey(key)) {
        throw new Error(ERROR.GAME_COMMAND);
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
