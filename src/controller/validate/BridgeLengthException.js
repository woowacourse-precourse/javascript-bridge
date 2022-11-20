const { Console } = require('@woowacourse/mission-utils');
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
      Console.print(ERROR_MESSAGE.bridgeLength);
      return false;
    }

    return true;
  }
}

module.exports = BrdgeLengthException;
