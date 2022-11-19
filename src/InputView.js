const { Console } = require('@woowacourse/mission-utils');
const { QUESTIONS, ERROR_MSG } = require('./constants');
const { validateBridgeSize } = require('./Util');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(game) {
    Console.readLine(QUESTIONS.bridgeSize, len => {
      try {
        if (!validateBridgeSize(len))
          throw new Error(ERROR_MSG.invalidBridgeSize);
        game.size = +len;
        game.makeBridge();
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(game);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {}
};

module.exports = InputView;
