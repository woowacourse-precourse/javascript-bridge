const { BRIDGE_RETRY_ASK_REGEX, ERROR } = require('./constants');

const checkRetry = (ask) => {
  if (ask.length !== 1) {
    return false;
  }
  if (!BRIDGE_RETRY_ASK_REGEX.test(ask)) {
    return false;
  }
  return true;
};

const printRetryError = (check) => {
  if (!check) {
    throw new Error(ERROR.BRIDGE_RETRY_ERROR);
  }
};

module.exports = { printRetryError, checkRetry };
