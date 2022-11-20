const { isRightLevelString } = require('../Utils/Validator');

class Selected {
  #selected;

  constructor() {
    this.#selected = [];
  }

  static validate(input) {
    isRightLevelString(input);
  }

  get level() {
    return this.#selected.length;
  }

  addElement(input) {
    this.constructor.validate(input);
    this.#selected.push(input);
  }

  getElement(i) {
    return this.#selected[i];
  }

  reset() {
    this.#selected = [];
  }
}

module.exports = Selected;
