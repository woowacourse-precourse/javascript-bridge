const { ERROR_MESSAGE, REGEX, MODEL_KEY } = require('../../utils/constants');

class UpDownKey {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  #getValidateData() {
    if (!REGEX.upDownKey.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.upDownKey);
    }

    return this;
  }

  #updateUserBridge() {
    const oldData = this.#repo.read(MODEL_KEY.userBridge) || [];

    this.#repo.update(MODEL_KEY.userBridge, [...oldData, this.#input]);

    return this;
  }

  doAction() {
    this.#getValidateData().#updateUserBridge();
  }
}

module.exports = UpDownKey;
