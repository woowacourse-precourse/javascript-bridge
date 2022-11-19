const { MESSAGES_ERROR } = require("../utils/constants");

const InputChecker = {
  checkBridgeSize(userInput) {
    if (/[\D]{1,}/g.test(userInput)) throw new Error(MESSAGES_ERROR.BRIDGE_SIZE_NOT_NUMBER);
    if (userInput.length < 1 || userInput.length > 2) throw new Error(MESSAGES_ERROR.BRIDGE_SIZE_INPUT_LENGTH);
    if (+userInput < 3 || +userInput > 20) throw new Error(MESSAGES_ERROR.BRIDGE_SIZE_NOT_IN_RANGE);
  },

  checkMoves(userInput) {
    if (/[^DU]{1,}/.test(userInput)) throw new Error(MESSAGES_ERROR.MOVE_NOT_VALID_LETTER);
    if (userInput.length !== 1) throw new Error(MESSAGES_ERROR.MOVE_INPUT_LENGTH);
  },

  checkGameCommand(userInput) {
    if (/[^QR]{1,}/.test(userInput)) throw new Error(MESSAGES_ERROR.COMMAND_NOT_VALID_LETTER);
    if (userInput.length !== 1) throw new Error(MESSAGES_ERROR.COMMAND_INPUT_LENGTH);
  },
};

module.exports = InputChecker;
