const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const { validateBridgeSize, validateMoving } = require('./Validation');
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
      printMap(bridgeGame, step, moving);
      const isMovable = bridgeGame.move(step, moving);
      const bridgeSize = bridgeGame.getBridgeSize();
      if (!isMovable) app.printResult(bridgeGame, step, moving);
      else {
        if (step < bridgeSize - 1) app.step(bridgeGame, step + 1);
        else app.readGameCommand();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
