const OutputView = require('../views/OutputView');
const Validation = require('./Validation');

const ExceptionHandler = {
  tryValidate(source, validateType) {
    const { isValidation, errorMessage } = Validation[`validate${validateType}`](source);
    if (isValidation) return true;

    try {
      throw errorMessage;
    } catch (error) {
      OutputView.printError(error);
      OutputView.addNewLine();
      return false;
    }
  },
};

module.exports = ExceptionHandler;
