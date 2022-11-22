const { INPUT_MESSAGE } = require('./constants/message');
const { Console } = require('@woowacourse/mission-utils');
const { MOVING, GAME_COMMANDS, GAME_RESULT } = require('./constants/index');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      const checkedSize = Validation.validateBridgeSize(bridgeSize);
      if (checkedSize) {
        this.readBridgeSize();
      }
      const bridgeGame = new BridgeGame();
      const bridge = bridgeGame.prepare(bridgeSize);
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
      const checkedMoving = Validation.validateMovingCommand(movingCommand);

      if (checkedMoving) {
        return this.readMoving(bridge, movingRoute, UserTryCount);
      }

      const bridgeGame = new BridgeGame();
      const gameReult = bridgeGame.move(movingCommand, bridge, movingRoute);

      if (
        gameReult[0].includes(MOVING.WRONG_ANSWER) ||
        gameReult[1].includes(MOVING.WRONG_ANSWER)
      ) {
        return this.readGameCommand(bridge, UserTryCount, movingRoute);
      }
      if (gameReult[0].length === bridge.length) {
        return OutputView.printResult(GAME_RESULT.SUCCESS, UserTryCount, movingRoute);
      }
      return this.readMoving(bridge, gameReult, UserTryCount);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, UserTryCount, movingRoute) {
    Console.readLine(INPUT_MESSAGE.GAME_COMMAND, (gameCommand) => {
      const checkedGameCommand = Validation.validateGameCommand(gameCommand);
      if (checkedGameCommand) {
        return this.readGameCommand(bridge, UserTryCount, movingRoute);
      }

      if (gameCommand === GAME_COMMANDS.RETRY) {
        UserTryCount += 1;
        const bridgeGame = new BridgeGame();
        const resetMovingRoute = bridgeGame.retry(bridge);
        return this.readMoving(bridge, resetMovingRoute, UserTryCount);
      }
      if (gameCommand === GAME_COMMANDS.QUIT) {
        OutputView.printResult(GAME_COMMANDS.QUIT, UserTryCount, movingRoute);
      }
    });
  },
};

module.exports = InputView;
