class GameMetaData {
  #try;
  constructor() {
    this.#try = 0;
  }

  addTry() {
    this.#try += 1;
  }

  getTryCount() {
    return this.#try;
  }
}
module.exports = GameMetaData;
