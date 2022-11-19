const catchError = require('../utils/catchError');
const { ERROR_MESSAGE, USER_TEXT, BOOLEAN } = require('../constant/contant');

function commandValidation(commandInput) {
  if (commandInput !== USER_TEXT.QUIT && commandInput !== USER_TEXT.RESTART) {
    return BOOLEAN.FALSE;
  }

  return BOOLEAN.TRUE;
}

function checkRetryCommand(input) {
  if (!commandValidation(input)) {
    catchError(ERROR_MESSAGE.COMMAND);
    return BOOLEAN.FALSE;
  }

  return BOOLEAN.TRUE;
}

module.exports = { commandValidation, checkRetryCommand };
