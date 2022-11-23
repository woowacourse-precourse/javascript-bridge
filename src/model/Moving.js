/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');
const { MOVE_COMMAND_UP, MOVE_COMMAND_DOWN } = require('../Constant');
const { ERROR_INPUT_U_D_LINE } = require('../Error');

class Moving {
  #moving;

  #outputView;

  #close;

  constructor(moving) {
    const outputView = Object.create(OutputView);
    this.#outputView = outputView;
    this.validate(moving);
    this.#moving = moving;
  }

  validate(moving) {
    if (moving !== MOVE_COMMAND_UP && moving !== MOVE_COMMAND_DOWN) {
      this.#close = true;
      this.#outputView.printError(ERROR_INPUT_U_D_LINE);
    }
  }

  getClose() {
    return this.#close;
  }

  getMoving() {
    return this.#moving;
  }
}

module.exports = Moving;
