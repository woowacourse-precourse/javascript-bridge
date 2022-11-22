const { COMMANDS, DIRECTIONS, PHASE } = require('./constant/Constant');
const { InputError } = require('./Error');

class Validator {
  #REG_EXP = Object.freeze({
    NUMBER_ONLY: /^\d+$/,
    ONE_UPPERCASE: /^[A-Z]{1}$/,
  });

  #methods = {
    [PHASE.START]: this.#bridgeSize.bind(this),
    [PHASE.MOVE]: this.#moving.bind(this),
    [PHASE.COMMAND]: this.#gameCommand.bind(this),
  };

  goTo(phase, input) {
    const method = this.#methods[phase];

    method(input);
  }

  #format(regExp, input) {
    if (!regExp.test(input)) {
      throw new InputError(`${InputError.MESSAGE.FORMAT}`);
    }
  }

  #bridgeSize(input) {
    const regExp = this.#REG_EXP.NUMBER_ONLY;

    this.#format(regExp, input);
    if (input < 3 || input > 20) {
      throw new InputError(`${InputError.MESSAGE.BRIDGE_SIZE}`);
    }
  }

  #moving(input) {
    const regExp = this.#REG_EXP.ONE_UPPERCASE;
    const directions = new Set(DIRECTIONS);

    this.#format(regExp, input);
    if (!directions.has(input)) {
      throw new InputError(`${InputError.MESSAGE.MOVING}`);
    }
  }

  #gameCommand(input) {
    const regExp = this.#REG_EXP.ONE_UPPERCASE;
    const commands = new Set(COMMANDS);

    this.#format(regExp, input);
    if (!commands.has(input)) {
      throw new InputError(`${InputError.MESSAGE.GAME_COMMAND}`);
    }
  }
}

module.exports = Validator;
