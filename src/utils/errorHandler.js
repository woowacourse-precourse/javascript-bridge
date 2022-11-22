const OutputView = require('../views/OutputView');

const errorHandler = (callback) => {
  try {
    callback();
  } catch (e) {
    OutputView.printError(e.message);
  }
};

module.exports = errorHandler;
