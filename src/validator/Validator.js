const { ERROR_MESSAGE } = require("../utils/Constants");

class Validator {
  #errorPrefix;

  constructor() {
    this.#errorPrefix = ERROR_MESSAGE.ERROR_PREFIX;
  }

  error(message) {
    throw Error(this.#errorPrefix + message);
  }
}

module.exports = Validator;
