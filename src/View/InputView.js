const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constant/message');
const BridgeSizeValidator = require('../Validation/BridgeSizeValidator.js');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.SIZE_INPUT, (userInput) => {
      const bridgeSize = Number(userInput);
      try {
        new BridgeSizeValidator(bridgeSize);
      } catch (error) {
        Console.print(error.message);
        return this.readBridgeSize(bridgeGame);
      }
      bridgeGame.setBridge(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;

