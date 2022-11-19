const { MODEL_KEY } = require('../../utils/constants');

class BridgeRestart {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  #reset() {
    this.#repo.update(MODEL_KEY.userBridge, []);

    return this;
  }

  #increaseTryCount() {
    const oldData = this.#repo.read(MODEL_KEY.tryCount);

    this.#repo.update(MODEL_KEY.tryCount, oldData + 1);
  }

  doAction() {
    this.#reset().#increaseTryCount();
  }
}

module.exports = BridgeRestart;
