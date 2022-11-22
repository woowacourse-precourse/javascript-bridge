const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require('./constants/message');
const { Console } = require('@woowacourse/mission-utils');
const { MOVING, GAME_COMMANDS, GAME_RESULT } = require('./constants/index');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      const checkedSize = Validation.validateBridgeSize(bridgeSize);
      if (checkedSize) this.readBridgeSize();
      const bridgeGame = new BridgeGame();
      bridgeGame.prepare(bridgeSize);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(`${OUTPUT_MESSAGE.LINE}${INPUT_MESSAGE.MOVING_COMMAND}`, (movingCommand) => {
      const checkedMoving = Validation.validateMovingCommand(movingCommand);
      if (checkedMoving) return this.readMoving(bridgeGame);

      bridgeGame.move(movingCommand);
      if (bridgeGame.hasWrongAnswer()) return this.readGameCommand(bridgeGame);
      if (bridgeGame.hasAllAnswer()) return bridgeGame.finish(GAME_RESULT.SUCCESS);
      return this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(INPUT_MESSAGE.GAME_COMMAND, (gameCommand) => {
      const checkedGameCommand = Validation.validateGameCommand(gameCommand);
      if (checkedGameCommand) return this.readGameCommand(bridgeGame);
      if (gameCommand === GAME_COMMANDS.QUIT) return bridgeGame.finish(GAME_RESULT.FAIL);

      bridgeGame.retry();
      return this.readMoving(bridgeGame);
    });
  },

  printSpaceLine() {
    console.log('');
  },
};

module.exports = InputView;
