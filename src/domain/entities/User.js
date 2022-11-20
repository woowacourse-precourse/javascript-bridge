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
    return [...this.#log];
  }

  getLocation() {
    return this.#log.length - 1;
  }

  getCurrentDirection() {
    return this.#log[this.getLocation()];
  }
}

module.exports = User;
