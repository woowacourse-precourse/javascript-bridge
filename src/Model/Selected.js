const GameError = require('../Error/GameError');
const { ERROR_MESSAGE, INPUT_MESSAGE } = require('../utils/Constant');

class Selected {
  #selected;

  constructor() {
    this.#selected = [];
  }

  static isRightString(element) {
    if (element !== INPUT_MESSAGE.UP || element !== INPUT_MESSAGE.DOWN)
      return false;
    return true;
  }

  #validate() {
    this.#selected.forEach((element) => {
      if (this.constructor.isRightString(element))
        throw new GameError(ERROR_MESSAGE.LEVEL_INPUT);
    });
  }

  addElement(input) {
    this.#selected.push(input);
    this.#validate();
  }

  getElement(i) {
    return this.#selected[i];
  }

  getLength() {
    return this.#selected.length;
  }

  reset() {
    this.#selected = [];
  }
}

module.exports = Selected;
