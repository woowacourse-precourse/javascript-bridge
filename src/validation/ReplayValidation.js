const { ERROR_MESSAGE } = require('../constants');

const ReplayValidation = {
  validate(command) {
    const isValid = ['R', 'Q'].includes(command);

    if (!isValid) return { status: false, message: ERROR_MESSAGE.replay };
    return { status: true };
  }
};

module.exports = ReplayValidation;
