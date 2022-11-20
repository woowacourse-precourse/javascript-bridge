const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG } = require("./constants/Message");
const Vaild = require("./Vaild");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * Console.readLine의 사용을 관리하는 메서드
   * @param {string} message 화면에 출력할 메시지
   * @param {function()} callback 입력이 종료된 후 호출될 함수
   * @param {function():boolean} vaild 입력받은 값이 옳은 값인히 판별할 함수
   */
  inputMethod(message, callback, vaild) {
    Console.readLine(message, (input) => {
      if (vaild(input)) return callback(input);
      this.inputMethod(message, callback, vaild);
    });
  },

  /**
   * 다리의 길이를 입력받는 메서드
   * @param {function()} callback 입력이 종료된 후 호출될 함수
   */
  readBridgeSize(callback) {
    return this.inputMethod(
      INPUT_MSG.BRIDGESIZE,
      callback,
      Vaild.checkBridgeSize
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는 메서드
   * @param {function()} callback 입력이 종료된 후 호출될 함수
   */
  readMoving(callback) {
    return this.inputMethod(INPUT_MSG.MOVING, callback, Vaild.checkMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는 메서드
   * @param {function()} callback 입력이 종료된 후 호출될 함수
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
