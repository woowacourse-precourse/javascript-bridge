const { INPUT_MESSAGE } = require('./utils/constants');
const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      Validation.validateBridgeSize(bridgeSize);
      const bridge = BridgeMaker.makeBridge(
        parseInt(bridgeSize, 10),
        BridgeRandomNumberGenerator.generate
      );
      Console.print('');
      this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(INPUT_MESSAGE.MOVING_COMMAND, (movingCommand) => {
      Validation.validateMovingCommand(movingCommand);

      const bridgeGame = new BridgeGame();
      let movingRoute = [[], []];

      bridgeGame.move(movingCommand, bridge, movingRoute);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.GAME_COMMAND, (gameCommand) => {});
  },
};

module.exports = InputView;
