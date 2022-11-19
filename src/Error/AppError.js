const { format } = require('../utils/Constant');

class AppError extends Error {
  static PREFIX = '[ERROR]';

  name = 'AppError';

  constructor(message, ...args) {
    super(`${AppError.PREFIX} ${format(message, ...args)}`);
  }
}

module.exports = AppError;
