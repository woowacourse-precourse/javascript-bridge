const { REGEX, ERROR_MESSAGE } = require('../../utils/constants');

class BridgeLength {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  #getValidateData() {
    if (!REGEX.bridgeLength.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.bridgeLength);
    }

    return this;
  }

  #createBridgeData() {
    this.#repo.create(this.#input);
  }

  doAction() {
    this.#getValidateData().#createBridgeData();
  }
}

module.exports = BridgeLength;
