const ErrorLogger = require('./ErrorLogger');

const ErrorBoundary = class {
  constructor() {
    this.errorLogger = new ErrorLogger();
  }

  validateInput(validateValueCallback) {
    this.errorLogger.onCallback(validateValueCallback);
  }

  validate(value) {}

  getErrorMessage() {}
};

module.exports = ErrorBoundary;
