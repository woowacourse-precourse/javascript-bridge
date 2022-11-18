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
    const birdgeSize = Number(await this.inputMethod(INPUT_MSG.BRIDGESIZE));
    try {
      if (!isNumber(birdgeSize) || !(birdgeSize >= 3 && birdgeSize <= 20))
        throw error(ERROR_MSG.INPUT_BRIDGE);
      return birdgeSize;
    } catch (msg) {
      console.log(msg.message);
      return this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const moving = await this.inputMethod(INPUT_MSG.MOVING);
    try {
      if (moving !== "U" && moving !== "D") throw error(ERROR_MSG.INPUT_MOVING);
      return moving;
    } catch (msg) {
      console.log(msg.message);
      return this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const command = await this.inputMethod(INPUT_MSG.GAMECOMMAND);
    try {
      if (command !== "R" && command !== "Q") {
        throw error(ERROR_MSG.INPUT_GAMECOMMAND);
      }
      return command;
    } catch (msg) {
      console.log(msg.message);
      return this.readGameCommand();
    }
  },
};

module.exports = InputView;
