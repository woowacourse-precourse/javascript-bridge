class BridgeStatus {
  #array;

  constructor() {
    this.#array = [];
  }

  getStatus() {
    return this.#array;
  }

  add(isMatch, position, step) {
    this.#array[step] = [' ', ' '];
    this.#array[step][position] = isMatch ? 'O' : 'X';
  }
}

module.exports = BridgeStatus;
