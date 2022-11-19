const catchError = require('../utils/catchError');

function movingValidation(movingInput) {
  if (movingInput !== 'U' && movingInput !== 'D') {
    return false;
  }

  return true;
}

function checkRetryMoving(input) {
  if (!movingValidation(input)) {
    catchError('[ERROR] 다리 이동은 U혹은 D인 문자여야 합니다.');
    return false;
  }

  return true;
}

module.exports = { movingValidation, checkRetryMoving };
