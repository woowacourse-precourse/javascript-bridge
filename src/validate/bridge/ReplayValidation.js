const { ERROR_MESSAGE } = require('../../constants');

const ReplayValidation = class {
  validate(command) {
    const isValid = ['R', 'Q'].includes(command);

    if (!isValid) return { status: false, message: ERROR_MESSAGE.command };
    return { status: true };
  }
};

module.exports = ReplayValidation;
