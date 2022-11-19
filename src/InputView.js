const { Console } = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./util/messages");
const { validateBrigeSize } = require("./util/validate");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(cbAfterReadBridgeSize) {
    Console.readLine(CONSOLE_MESSAGE.enterSize, cbAfterReadBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(cbAfterReadMoving) {
    Console.readLine(CONSOLE_MESSAGE.choice, cbAfterReadMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(cbAfterStopGame) {
    Console.readLine(CONSOLE_MESSAGE.retry, cbAfterStopGame);
  },
};

module.exports = InputView;
