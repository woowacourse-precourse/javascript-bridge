const { TYPE, ERROR } = require('../constants');

class InputError extends Error {
  constructor(type) {
    super();
    this.name = `${type}Error`;
    this.type = TYPE[type];
    this.message = `\n${ERROR.PREFIX} ${ERROR[type]}`
  }
}

module.exports = InputError;
