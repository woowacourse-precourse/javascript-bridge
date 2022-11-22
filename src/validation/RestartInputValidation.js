const GENERAL_CONSTANTS = require("../constants/GeneralConstants");
const { USER_RESTART_MESSAGES } = require("../constants/Messages");

const RestartInputValidation = {
  /**
   * 유저 재시작 여부 입력을 검증한다.
   * @param userInput {string} [유저 재시작 여부 입력]
   */
  validate(userInput) {
    if (!GENERAL_CONSTANTS.USER_RESTART_REGEX.test(userInput)) {
      throw new Error(USER_RESTART_MESSAGES.INPUT_ERROR);
    }
  },
};

module.exports = RestartInputValidation;
