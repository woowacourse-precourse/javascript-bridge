/**
 * 다리 객체
 */
class Bridge {
  #length;

  #bridges;

  constructor(length, bridges) {
    this.#length = length;
    this.#bridges = bridges;
  }

  checkCorrectDirection(direction, index) {
    if (this.#bridges[index] === direction) return true;
    return false;
  }
}

module.exports = Bridge;
