const OutputView = require("../view/OutputView");

const ErrorHadler = {
  tryValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return false;
    }
  },
};

module.exports = ErrorHadler;
