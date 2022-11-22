const OutputView = require("../view/OutputView");

const errorController = (callbalck, errorCallback) => {
  try {
    callbalck();
  } catch (error) {
    OutputView.printError(error.message);
    errorCallback();
  }
};

module.exports = errorController;
