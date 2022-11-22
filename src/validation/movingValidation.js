const catchError = require('../utils/catchError');
const { ERROR_MESSAGE, USER_TEXT, BOOLEAN } = require('../constant/contant');

function movingValidation(movingInput) {
  if (movingInput !== USER_TEXT.UP && movingInput !== USER_TEXT.DOWN) {
    return BOOLEAN.FALSE;
  }

  return BOOLEAN.TRUE;
}

function checkRetryMoving(input) {
  if (!movingValidation(input)) {
    catchError(ERROR_MESSAGE.MOVING);
    return BOOLEAN.FALSE;
  }

  return BOOLEAN.TRUE;
}

module.exports = { movingValidation, checkRetryMoving };
