const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const { BRIDGE, GAME_COMMAND } = require('./constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * @param {function(string): void} callback 입력받은 후 실행할 함수
   */
  readBridgeSize(callback) {
    Console.print('다리의 길이를 입력해주세요.');
    Console.readLine('', (input) => this.errorHandler(
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
      Validator.validateInRange(BRIDGE.MIN_LENGTH, BRIDGE.MAX_LENGTH, input);
      callback(input);
    };
  },

  /**
   * @param {function(string): void} callback 입력받은 후 실행할 함수
   */
  readMoving(callback) {
    Console.print(`이동할 칸을 선택해주세요. (위: ${BRIDGE.ABOVE}, 아래: ${BRIDGE.BELOW})`);
    Console.readLine('', (input) => this.errorHandler(
      this.validateCommand(input, [BRIDGE.ABOVE, BRIDGE.BELOW], callback),
      () => this.readMoving(callback),
    ));
  },

  /**
   * @param {function(string): void} callback 입력받은 후 실행할 함수
   */
  readGameCommand(callback) {
    Console.print(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_COMMAND.RETRY}, 종료: ${GAME_COMMAND.QUIT})`);
    Console.readLine('', (input) => this.errorHandler(
      this.validateCommand(input, [GAME_COMMAND.RETRY, GAME_COMMAND.QUIT], callback),
      () => this.readGameCommand(callback),
    ));
  },

  /**
   * @param {string} input 플레이어의 입력
   * @param {string[]} allowedSet 허용되는 입력들의 집합
   * @param {function(string): void} callback 입력받은 후 실행할 함수
   * @return {function(): void} 에러핸들러에게 전달할 콜백함수
   */
  validateCommand(input, allowedSet, callback) {
    return () => {
      Validator.validateIncludes(allowedSet, input);
      callback(input);
    };
  },

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
