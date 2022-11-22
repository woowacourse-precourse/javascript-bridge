const OutputView = require('./View/OutputView');

const ErrorHandler = {
  handleError: (func) => (caller) => (params) => {
    try {
      func(...params);
    } catch (error) {
      OutputView.printError(error);
      caller();
    }
  },
};

module.exports = ErrorHandler;
