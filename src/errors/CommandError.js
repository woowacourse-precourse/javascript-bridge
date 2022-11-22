const AppError = require('./AppError');

class CommandError extends AppError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = CommandError;
