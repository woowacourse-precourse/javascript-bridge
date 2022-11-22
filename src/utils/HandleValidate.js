const OutputView = require('../view/OutputView');

const HandleValidate = {
  checkValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },
};

module.exports = HandleValidate;
