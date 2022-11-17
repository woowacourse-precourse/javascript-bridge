const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * @param {function(string): void} callback 입력받은 후 실행할 함수
   */
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => this.errorHandler(
      this.validateBridgeSize(input, callback),
      () => this.readBridgeSize(callback),
    ));
  },

  /**
   * @param {string} input 플레이어의 입력
   * @param {function(string): void} callback 입력받은 후 실행할 함수
   * @return {function(): void} 에러핸들러에게 전달할 콜백함수
   */
  validateBridgeSize(input, callback) {
    return () => {
      Validator.validateIsNumber(input);
      Validator.validateInRange(3, 20, input);
      callback(input);
    };
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  /**
   * @param {function(): void} callback 입력 유효성을 검증하기 위한 콜백함수
   * @param {function(): void} onError 에러 발생시 실행할 함수
   */
  errorHandler(callback, onError) {
    try {
      callback();
    } catch (err) {
      Console.print(`\n${err.message}`);
      onError();
    }
  },
};

module.exports = InputView;
