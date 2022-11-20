class Bridge {
  #upBrige = [];
  #downBrige = [];

  pushUpBrige(word) {
    this.#upBrige.push(word);
  }
  pushDownBrige(word) {
    this.#downBrige.push(word);
  }
  getUpBrige() {
    return this.#upBrige;
  }
  getDownBrige() {
    return this.#downBrige;
  }
}

module.exports = Bridge;
