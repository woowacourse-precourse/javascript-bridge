const RULE = require('../constants');

class User {
  #log = [];

  init() {
    this.#log = [];
  }

  move(direction) {
    this.#log.push(direction);
  }

  getLog() {
    if (this.#log.length !== 0) return [...this.#log];
    return [];
  }

  getLocation() {
    return this.#log.length - 1;
  }

  getCurrentDirection() {
    return this.#log[this.getLocation()];
  }
}

module.exports = User;
