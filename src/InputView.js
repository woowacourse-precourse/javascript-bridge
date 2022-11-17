const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG, ERROR_MSG } = require("./constants/Message");
const utils = require("./Utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  async inputMethod(message) {
    return new Promise((resolve) => {
      Console.readLine(message, (input) => {
        resolve(input);
      });
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    let birdgeSize = await this.inputMethod(INPUT_MSG.BRIDGESIZE);
    try {
      if (birdgeSize < 3 || birdgeSize > 20)
        throw utils.error(ERROR_MSG.INPUT_BRIDGE);
    } catch (msg) {
      console.dir(msg);
      return (birdgeSize = this.readBridgeSize());
    }
    return birdgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
