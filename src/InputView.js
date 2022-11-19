/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const { validateBridgeSize, validateUserMove, validateUserEnd } = require("./ValidateInput");
const OutputView = require("./OutputView");

const InputView = {
  getUserInputRecursive(prompt, callback, validator) {
    Console.readLine(prompt, input => {
      try {
        validator(input);
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        this.getUserInputRecursive(prompt, callback, validator);
      }
    });
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.getUserInputRecursive('다리의 길이를 입력해주세요.\n', input => {
      callback(Number(input));
    }, validateBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.getUserInputRecursive('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', input => {
      callback(input);
    }, validateUserMove);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.getUserInputRecursive('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', input => {
      callback(input);
    }, validateUserEnd);
  },
};

module.exports = InputView;
