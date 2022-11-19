const catchError = require('../utils/catchError');

function commandValidation(commandInput) {
  if (commandInput !== 'Q' && commandInput !== 'R') {
    return false;
  }

  return true;
}

function checkRetryCommand(input) {
  if (!commandValidation(input)) {
    catchError('[ERROR] 재시작,종료 R혹은 Q인 문자여야 합니다.');
    return false;
  }

  return true;
}

module.exports = { commandValidation, checkRetryCommand };
