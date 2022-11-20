const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./Constant");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function} callback size 입력받은 후 실행할 기능
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (answer) => {
      try {
        Console.print("");
        callback(answer);
      } catch (error) {
        InputView.handleError(error, InputView.readBridgeSize, callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function} callback 이동할 칸("U" or "D") 입력받은 후 실행할 기능
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVING_SPACE, (answer) => {
      try {
        callback(answer);
      } catch (error) {
        InputView.handleError(error, InputView.readMoving, callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function} callback 재시작 여부("R" or "Q") 입력받은 후 실행할 기능
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.RETRY_OR_QUIT, (answer) => {
      try {
        callback(answer);
      } catch (error) {
        InputView.handleError(error, InputView.readGameCommand, callback);
      }
    });
  },

  /**
   * @param {object} error 발생한 에러 객체
   * @param {function} callFunction 호출할 함수
   * @param {function} callback callFunction에 전달할 callback 함수
   */
  handleError(error, callFunction, callback) {
    Console.print(error.message);
    callFunction(callback);
  },
};

module.exports = InputView;
