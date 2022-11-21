const Validator = require('./Validator');

const VALID_INPUT = {
  move: ['U', 'D'],
  retry: ['R', 'Q'],
};

class BridgeValidator extends Validator {
  constructor({ bridgeSize: { min, max } }) {
    super();
    this.min = min;
    this.max = max;
    // TODO: 상수화, 생성자 인자로 바꿀지 고민
    this.validInput = VALID_INPUT;
  }

  isValidBridgeSize(value) {
    this.isValidInput(value);
    this.isValidNumber(value);

    const size = Number(value);

    if (size < this.min || size > this.max) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 다리 길이는 ${this.min}부터 ${this.max}사이의 숫자여야 합니다.`);
    }
  }

  isValidCommand(target, command) {
    this.isValidInput(command);

    const validCommands = this.validInput[target];

    if (!validCommands.includes(command)) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} ${validCommands.join(' 또는 ')}만 입력할 수 있습니다.\n다시 확인하고 입력해 주세요.`);
    }
  }
}

module.exports = BridgeValidator;
