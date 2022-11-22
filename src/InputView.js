const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const {
  validateBridgeSize,
  validateMoving,
  validateGameCommand,
} = require('./Validation');
const { printMap } = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(app) {
    Console.readLine(`\n${MESSAGE.ENTER_BRIDGE_SIZE}\n`, (inputStr) => {
      const bridgeSize = validateBridgeSize(inputStr);
      app.makeBridge(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, step, app) {
    Console.readLine(`\n${MESSAGE.SELECT_MOVING}\n`, (inputStr) => {
      const moving = validateMoving(inputStr);
      const isMovable = bridgeGame.move(step, moving);
      printMap(bridgeGame, step, isMovable);
      app.evaluate(bridgeGame, step, isMovable);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, step, app) {
    Console.readLine(`\n${MESSAGE.ENTER_GAME_COMMAND}\n`, (inputStr) => {
      const gameCommand = validateGameCommand(inputStr);
      switch (gameCommand) {
        case 'R':
          bridgeGame.retry(app);
          break;
        case 'Q':
          app.printResult(bridgeGame, step, false);
          break;
      }
    });
  },
};

module.exports = InputView;
