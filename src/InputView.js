const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('./Constants');
const { checkBridgeSize, checkMovingKey } = require('./Validate');

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
        OutputView.printMap(USER_BRIDGE, bridgeGame);
      } else {
        throw new Error(ERROR.MOVING_KEY);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
