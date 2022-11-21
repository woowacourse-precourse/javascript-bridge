const { ERROR_PREFIX } = require('../constants/Error');

class AppError extends Error {
  constructor(message) {
    super(`${ERROR_PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = AppError;
