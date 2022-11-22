const { ERROR_CODE, CustomError } = require("./Error");
const OutputView = require("./OutputView");

class Validator {
  static size(callback, { onError: errorCallback }) {
    return (size) => {
      try {
        if (isNaN(Number(size))) {
          throw new CustomError(ERROR_CODE.NOT_NUMBER);
        }

        if (size < 3 || size > 20) {
          throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
        }

        callback(size);
      } catch (error) {
        OutputView.printMessage(error.message);
        errorCallback();
      }
    };
  }
}

module.exports = Validator;
