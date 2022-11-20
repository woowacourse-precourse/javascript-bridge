const Exceptionable = require('./Exceptionable');
const { ERROR_MESSAGE, REGEX } = require('../../utils/constants');

class BrdgeLengthException extends Exceptionable {
  #bridgeLength;

  constructor(bridgeLength) {
    super();

    this.#bridgeLength = bridgeLength;
  }

  isValidate() {
    if (!REGEX.bridgeLength.test(this.#bridgeLength)) {
      throw new Error(ERROR_MESSAGE.bridgeLength);
    }
  }
}

module.exports = BrdgeLengthException;
