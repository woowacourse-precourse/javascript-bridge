const GENERAL_CONSTANTS = require("../constants/GeneralConstants");
const { BRIDGE_INPUT_MESSAGES } = require("../constants/Messages");

const BridgeSizeValidation = {
  /**
   * 다리 길이에 대한 입력을 검증한다.
   * @param userInput {string} [다리 길이 입력]
   */
  validate(userInput) {
    if (!GENERAL_CONSTANTS.BRIDGE_LENGTH_REGEX.test(userInput)) {
      throw new Error(BRIDGE_INPUT_MESSAGES.INPUT_ERROR);
    }
  },
};

module.exports = BridgeSizeValidation;
