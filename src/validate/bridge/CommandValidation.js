const { ERROR_MESSAGE } = require('../../constants');

const CommandValidation = class {
  validate(command) {
    const isValid = ['U', 'D'].includes(command);

    if (!isValid) return { status: false, message: ERROR_MESSAGE.command };
    return { status: true };
  }
};

module.exports = CommandValidation;
