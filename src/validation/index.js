const ErrorBoundary = require('../error/ErrorBoundary');
const SizeValidation = require('./SizeValidation');
const CommandValidation = require('./CommandValidation');
const ReplayValidation = require('./ReplayValidation');

const Validation = class {
  constructor() {
    this.errorBoundary = new ErrorBoundary();
  }

  #validateUserInput(callbackFuncs) {
    this.errorBoundary.validateInput(callbackFuncs);
  }

  validateBridgeSize(bridgeSize, { errorHandler, successHandler }) {
    this.#validateUserInput({
      validateValueCallback: () => SizeValidation.validate(bridgeSize),
      errorHandler,
      successHandler,
    });
  }

  validateBridgeCommand(command, { errorHandler, successHandler }) {
    this.#validateUserInput({
      validateValueCallback: () => CommandValidation.validate(command),
      errorHandler,
      successHandler,
    });
  }

  validateBridgeReplayCommand(replayCommand, { errorHandler, successHandler }) {
    this.#validateUserInput({
      validateValueCallback: () => ReplayValidation.validate(replayCommand),
      errorHandler,
      successHandler,
    });
  }
};

module.exports = Validation;
