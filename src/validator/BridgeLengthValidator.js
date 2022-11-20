const Validator = require('./Validator');
const { ERROR_MESSAGE } = require('../utils/constant');

class BridgeLengthValidator extends Validator {
  #bridgeLength;

  #regex = /^\d{1}$|^1{1}\d{1}$|^20$/;

  constructor(bridgeLength) {
    super();

    this.#bridgeLength = bridgeLength;
  }

  validate() {
    if (!this.#regex.test(this.#bridgeLength))
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH);
  }
}

module.exports = BridgeLengthValidator;
