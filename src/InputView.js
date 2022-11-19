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
  readBridgeSize(onReadBridgeSize) {
    Console.readLine(CONSOLE_MESSAGE.enterSize, onReadBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(onReadMoving) {
    Console.readLine(CONSOLE_MESSAGE.choice, onReadMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(onStopGame) {
    Console.readLine(CONSOLE_MESSAGE.retry, onStopGame);
  },
};

module.exports = InputView;
