class Player {
  #isGameOver = false;
  #count = 1;
  #isWinnging = false;

  setIsGameOver(boolen) {
    this.#isGameOver = boolen;
  }
  getIsGameOver() {
    return this.#isGameOver;
  }
  setIsWinnging(boolen) {
    this.#isWinnging = boolen;
  }

  getIsWinnging() {
    return this.#isWinnging;
  }
  addCount() {
    this.#count += 1;
  }
  getCount() {
    return this.#count;
  }
}

module.exports = Player;
