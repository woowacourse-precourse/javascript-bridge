const { checkHasKey } = require('../Utils/Utils');

class Retry {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    checkHasKey(this.#input);
  }
}

module.exports = Retry;
