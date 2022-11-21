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
}

module.exports = Bridge;
