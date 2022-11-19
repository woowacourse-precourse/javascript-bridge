class BridgeLength {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  #createBridgeData() {
    this.#repo.create(this.#input);
  }

  doAction() {
    this.#createBridgeData();
  }
}

module.exports = BridgeLength;
