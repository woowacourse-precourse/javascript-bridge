const { CONDITION, ERROR_MESSAGE } = require('./Constants');

const Validation = {
  bridgeSize(answer) {
    if (CONDITION.NOT_INTEGER(answer)) {
      throw new Error(ERROR_MESSAGE.INTEGER);
    }

    if (CONDITION.INVALID_DOMAIN(answer)) {
      throw new Error(ERROR_MESSAGE.DOMAIN);
    }
  },
};

module.exports = Validation;
