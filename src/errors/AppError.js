const { ERROR_MESSAGE } = require("../constants/index");

class AppError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.PREFIX}${message}`);
  }
}

module.exports = AppError;
