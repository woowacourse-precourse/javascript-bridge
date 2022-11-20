const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG } = require("./constants/Message");
const Vaild = require("./Vaild");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  inputMethod(message, callback, vaild) {
    let answer;
    Console.readLine(message, (input) => {
      answer = input;
      if (vaild(answer)) return callback(answer);
      this.inputMethod(message, callback, vaild);
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    return this.inputMethod(
      INPUT_MSG.BRIDGESIZE,
      callback,
      Vaild.checkBridgeSize
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    return this.inputMethod(INPUT_MSG.MOVING, callback, Vaild.checkMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    return this.inputMethod(
      INPUT_MSG.GAMECOMMAND,
      callback,
      Vaild.checkGameCommand
    );
  },
};

module.exports = InputView;
