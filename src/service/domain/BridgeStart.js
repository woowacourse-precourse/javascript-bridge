class BridgeStart {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  #createBridgeData() {
    this.#repo.create(this.#input);
  }

  store() {
    this.#createBridgeData();
  }
}

module.exports = BridgeStart;
