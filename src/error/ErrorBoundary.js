const ErrorLogger = require('./ErrorLogger');

const ErrorBoundary = class {
  constructor() {
    this.errorLogger = new ErrorLogger();
  }

  validateInput(callbackFuncs) {
    this.errorLogger.onCallback(callbackFuncs);
  }

  validate(value) {}

  getErrorMessage() {}
};

module.exports = ErrorBoundary;
