const catchError = require('../utils/catchError');
const { ERROR_MESSAGE, NUMBER, BOOLEAN } = require('../constant/contant');

function bridgeValidation(bridgeInput) {
  const bridge = Number(bridgeInput);
  if (bridge < NUMBER.THREE || bridge > NUMBER.TWENTY || Number.isNaN(bridge)) {
    return BOOLEAN.FALSE;
  }

  return BOOLEAN.TRUE;
}

function checkRetryBridge(input) {
  if (!bridgeValidation(input)) {
    catchError(ERROR_MESSAGE.BRIDGE);
    return BOOLEAN.FALSE;
  }

  return BOOLEAN.TRUE;
}

module.exports = { bridgeValidation, checkRetryBridge };
