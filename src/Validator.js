const { COMMAND, DIRECTION, PHASE } = require('./constant/Constant');
const { InputError } = require('./Error');

class Validator {
  #BRIDGE_SIZE = Object.freeze({
    MIN: 3,
    MAX: 20,
  });

  #directions = Object.values(DIRECTION);

  #commands = Object.values(COMMAND);

  #ERROR = Object.freeze({
    FORMAT: '입력 형식이 올바르지 않습니다.',
    BRIDGE_SIZE: `다리 길이는 ${this.#BRIDGE_SIZE.MIN}부터 ${this.#BRIDGE_SIZE.MAX} 사이의 숫자여야 합니다.`,
    MOVING: `이동할 칸은 ${this.#directions.join(', ')} 중 하나의 문자여야 합니다.`,
    GAME_COMMAND: `게임 명령어는 ${this.#commands.join(', ')} 중 하나의 문자여야 합니다.`,
  });

  REG_EXP = Object.freeze({
    NUMBER_ONLY: /^\d+$/,
    ONE_UPPERCASE: /^[A-Z]{1}$/,
  });

  #methods = {
    [PHASE.START]: this.bridgeSize.bind(this),
    [PHASE.MOVE]: this.moving.bind(this),
    [PHASE.COMMAND]: this.gameCommand.bind(this),
  };

  goTo(phase, input) {
    const method = this.#methods[phase];

    method(input);
  }

  #format(regExp, input) {
    if (!regExp.test(input)) {
      throw new InputError(`${this.#ERROR.FORMAT}`);
    }
  }

  bridgeSize(input) {
    const regExp = this.REG_EXP.NUMBER_ONLY;

    this.#format(regExp, input);
    if (input < 3 || input > 20) {
      throw new InputError(`${this.#ERROR.BRIDGE_SIZE}`);
    }
  }

  moving(input) {
    const regExp = this.REG_EXP.ONE_UPPERCASE;
    const directions = new Set(this.#directions);

    this.#format(regExp, input);
    if (!directions.has(input)) {
      throw new InputError(`${this.#ERROR.MOVING}`);
    }
  }

  gameCommand(input) {
    const regExp = this.REG_EXP.ONE_UPPERCASE;
    const commands = new Set(this.#commands);

    this.#format(regExp, input);
    if (!commands.has(input)) {
      throw new InputError(`${this.#ERROR.GAME_COMMAND}`);
    }
  }
}

module.exports = Validator;
