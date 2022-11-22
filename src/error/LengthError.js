const { ERROR_MESSAGE } = require("../model/component");
class LengthError {
  #length;
  constructor(length) {
    this.validate(length);
    this.#length = length;
  }

  validate(length) {
    if (!(length >= 3 && length <= 20)) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }
  }
}

module.exports = LengthError;
