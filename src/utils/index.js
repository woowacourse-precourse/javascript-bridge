const { ERROR_PREFIX } = require('../constants');

const throwError = (errorMessage) => {
  throw new Error(ERROR_PREFIX + errorMessage);
};

module.exports = {
  throwError,
};
