const AppError = require('./AppError');

class GameError extends AppError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = GameError;
