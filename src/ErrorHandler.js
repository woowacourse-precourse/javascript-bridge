const { checkBridgeSizeInput } = require("./ErrorCase");
const { printInputErrorMessage } = require("./OutputView");
const { ERROR } = require("./constants");

const ErrorHandler = {
  handleBridgeSizeInput(app, input) {
    const isError = checkBridgeSizeInput(input);

    if (isError) {
      printInputErrorMessage(ERROR.WRONG_BRIDGE_SIZE);
      app.terminate();
    }
  },
};

module.exports = ErrorHandler;
