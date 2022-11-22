const GENERAL_CONSTANTS = require("../constants/GeneralConstants");
const { USER_MOVE_MESSAGES } = require("../constants/Messages");

const MovingInputValidation = {
  /**
   * 유저의 이동 입력을 검증한다.
   * @param userInput {string} [유저 이동 입력]
   */
  validate(userInput) {
    if (!GENERAL_CONSTANTS.USER_MOVING_REGEX.test(userInput)) {
      throw new Error(USER_MOVE_MESSAGES.INPUT_ERROR);
    }
  },
};

module.exports = MovingInputValidation;
