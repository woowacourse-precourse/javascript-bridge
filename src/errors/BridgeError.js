const AppError = require('./AppError');

class BridgeError extends AppError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = BridgeError;
