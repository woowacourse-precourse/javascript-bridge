const { MODEL_KEY } = require('../../utils/constants');

class UpDownKey {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  #updateUserBridge() {
    const oldData = this.#repo.read(MODEL_KEY.userBridge) || [];

    this.#repo.update(MODEL_KEY.userBridge, [...oldData, this.#input]);

    return this;
  }

  doAction() {
    this.#updateUserBridge();
  }
}

module.exports = UpDownKey;
