const { ERROR_CODE, CustomError } = require("./Error");

class Validator {
  static size(callback) {
    return (size) => {
      if (isNaN(Number(size))) {
        throw new CustomError(ERROR_CODE.NOT_NUMBER);
      }

      if (size < 3 || size > 20) {
        throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
      }

      callback(size);
    };
  }
}

module.exports = Validator;
