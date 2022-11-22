const ErrorLogger = class {
  constructor() {
    return new Proxy(this, handler);
  }

  onCallback({ validateValueCallback, errorHandler, successHandler }) {
    this.errorHandler = errorHandler;

    const { status, message } = validateValueCallback();
    if (!status) {
      throw new Error(`[ERROR] ${message}`);
    }

    successHandler();
  }

  catchAllError(error) {
    this.errorHandler(error);
  }
};

const handler = {
  get(target, prop) {
    return !ErrorLogger.prototype.hasOwnProperty(prop)
      ? target[prop]
      : (...args) => {
          try {
            target[prop].apply(this, args);
          } catch (error) {
            target.catchAllError.call(this, error);
          }
        };
  },
};

module.exports = ErrorLogger;
