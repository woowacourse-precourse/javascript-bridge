const { BASE } = require('../Constants');
const ValidationError = require('../error/ValidationError');
const Base = require('./Base');

class GameCommand {
  #input;

  #Base;
  constructor() {
    this.#Base = new Base();
  }

  checkInput(input) {
    this.#input = input;
    this.#checkROrQ();
    this.#checkLength();
  }

  #checkROrQ() {
    if (/[^RQ]/g.test(this.#input)) {
      throw new ValidationError(`${BASE.r_or_q}`);
    }
  }

  #checkLength() {
    this.#Base.checkLength(this.#input);
  }
}

module.exports = GameCommand;
