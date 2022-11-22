const OutputView = require("../views/OutputView");
const ErrorControl = {
  control(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printMessage(error.message);
      return false;
    }
  },
};

module.exports = ErrorControl;
