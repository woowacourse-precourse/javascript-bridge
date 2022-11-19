const catchError = require('../utils/catchError');

function bridgeValidation(bridgeInput) {
  const bridgeNumber = Number(bridgeInput);
  if (bridgeNumber < 3 || bridgeNumber > 20 || Number.isNaN(bridgeNumber)) {
    return false;
  }

  return true;
}

function checkRetryBridge(input) {
  if (!bridgeValidation(input)) {
    catchError('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    return false;
  }

  return true;
}

module.exports = { bridgeValidation, checkRetryBridge };
