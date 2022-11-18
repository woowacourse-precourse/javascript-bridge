const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG, ERROR_MSG } = require("./constants/Message");
const { isNumber, error } = require("./Utils");

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
    let birdgeSize = Number(await this.inputMethod(INPUT_MSG.BRIDGESIZE));
    try {
      if (!isNumber(birdgeSize) || !(birdgeSize >= 3 && birdgeSize <= 20))
        throw error(ERROR_MSG.INPUT_BRIDGE);
      return birdgeSize;
    } catch (msg) {
      console.dir(msg);
      return this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    let moving = await this.inputMethod(INPUT_MSG.MOVING);
    try {
      if (moving !== "U" && moving !== "D") {
        throw error(ERROR_MSG.INPUT_MOVING);
      }
      return moving;
    } catch (msg) {
      console.dir(msg);
      return this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
