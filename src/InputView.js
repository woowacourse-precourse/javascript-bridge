const { INPUT_MESSAGE } = require('./utils/constants');
const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      Validation.validateBridgeSize(bridgeSize);

      const bridge = BridgeMaker.makeBridge(
        parseInt(bridgeSize, 10),
        BridgeRandomNumberGenerator.generate
      );
      Console.print('');
      let movingRoute = [[], []];
      let UserTryCount = 1;
      this.readMoving(bridge, movingRoute, UserTryCount);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, movingRoute, UserTryCount) {
    Console.readLine(INPUT_MESSAGE.MOVING_COMMAND, (movingCommand) => {
      Validation.validateMovingCommand(movingCommand);

      const bridgeGame = new BridgeGame();
      const gameReult = bridgeGame.move(movingCommand, bridge, movingRoute);
      if (gameReult[0].includes('X') || gameReult[1].includes('X')) {
        this.readGameCommand(bridge, UserTryCount);
      } else {
        this.readMoving(bridge, gameReult, UserTryCount);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, UserTryCount) {
    Console.readLine(INPUT_MESSAGE.GAME_COMMAND, (gameCommand) => {
      const RESTART_COMMAND = 'R';
      const END_COMMAND = 'Q';

      Validation.validateInputCommand(gameCommand);

      if (gameCommand === RESTART_COMMAND) {
        UserTryCount += 1;
        const bridgeGame = new BridgeGame();
        const resetMovingRoute = bridgeGame.retry(bridge);
        return this.readMoving(bridge, resetMovingRoute, UserTryCount);
      }
      if (gameCommand === END_COMMAND) {
        const GAME_FAIL = '실패';
        OutputView.printResult(GAME_FAIL, UserTryCount);
      }
    });
  },
};

module.exports = InputView;
