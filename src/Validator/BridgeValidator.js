const Validator = require('./Validator');
const { VALID_INPUT } = require('../constants');

class BridgeValidator extends Validator {
  #min;

  #max;

  constructor({ bridgeSize: { min, max } }, validInput = VALID_INPUT) {
    super();
    this.#min = min;
    this.#max = max;
    this.validInput = validInput;
  }

  isValidBridgeSize(value) {
    this.isValidInput(value);
    this.isValidNumber(value);

    if (Number(value) < this.#min || Number(value) > this.#max) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 다리 길이는 ${this.#min}부터 ${this.#max}사이의 숫자여야 합니다.`);
    }

    return true;
  }

  isValidCommand(target, command) {
    this.isValidInput(command);

    if (!this.validInput[target].includes(command)) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} ${this.validInput[target].join(' 또는 ')}만 입력할 수 있습니다.\n다시 확인하고 입력해 주세요.`);
    }

    return true;
  }
}

module.exports = BridgeValidator;
