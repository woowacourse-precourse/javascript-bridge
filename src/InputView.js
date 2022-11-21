const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요. \n', (input) => {
      if (!Validator.validateNumber(input) || !Validator.validateNumberInRange(input)) {
        Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n');
        return this.readBridgeSize(callback);
      }
      return callback(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, index, model) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n', (input) => {
      if (!Validator.validateUpDown(input)) {
        Console.print('[ERROR] U 또는 D 중 한 문자만 입력해주세요.\n');
        return this.readMoving(callback, model, index);
      }
      callback(input, index);
      return index < model.getBridgeSize() - 1 && this.readMoving(callback, index + 1, model);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
