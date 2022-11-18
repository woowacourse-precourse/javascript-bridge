const {
  GAME_COMMAND_RETRY,
  GAME_COMMAND_QUIT,
  ERROR_NOT_UPPER_CASE,
  ERROR_UNEXPECTED_GAME_COMMAND,
} = require("../Utils");

const GameCommandValidation = {
  /**
   * 소문자로 입력했을 때 예외를 발생시킨다.
   * @param {string} string
   * @throws
   */
  validateIsUpperCase(string) {
    if (["r", "q"].includes(string)) throw new Error(ERROR_NOT_UPPER_CASE);
  },

  /**
   * R 또는 Q가 아닌 경우 예외를 발생시킨다.
   * @param {string} string
   * @throws
   */
  validateIsExpected(string) {
    if (![GAME_COMMAND_RETRY, GAME_COMMAND_QUIT].includes(string))
      throw new Error(ERROR_UNEXPECTED_GAME_COMMAND);
  },

  /**
   * 입력받은 재시도 여부를 검증하여 예외를 발생시킨다.
   * @param {string} string
   */
  validateGameCommand(string) {
    this.validateIsUpperCase(string);
    this.validateIsExpected(string);
  },
};

module.exports = GameCommandValidation;
