const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG } = require("./constants/Message");
const Vaild = require("./Vaild");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  inputMethod(message, fun) {
    return new Promise((resolve, _) => {
      Console.readLine(message, (input) => {
        if (fun(input)) resolve(input);
      });
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try {
      return this.inputMethod(INPUT_MSG.BRIDGESIZE, Vaild.checkBridgeSize);
    } catch (e) {
      return this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    try {
      return await this.inputMethod(INPUT_MSG.MOVING, Vaild.checkMoving);
    } catch (e) {
      return this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    try {
      return await this.inputMethod(
        INPUT_MSG.GAMECOMMAND,
        Vaild.checkGameCommand
      );
    } catch (e) {
      return this.readGameCommand();
    }
  },
};

module.exports = InputView;
