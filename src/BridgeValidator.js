const Validator = require('./Validator');

const VALID_MOVE_INPUT = ['U', 'D'];
const VALID_RETRY_INPUT = ['R', 'Q'];

class BridgeValidator extends Validator {
  constructor({ bridgeSize: { min, max } }) {
    super();
    this.min = min;
    this.max = max;
    // TODO: 상수화, 생성자 인자로 바꿀지 고민
    this.validInput = { move: VALID_MOVE_INPUT, retry: VALID_RETRY_INPUT };
  }

  isValidBridgeSize(value) {
    this.isValidInput(value);
    this.isValidNumber(value);

    const size = Number(value);

    if (size < this.min || size > this.max) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 다리 길이는 ${this.min}부터 ${this.max}사이의 숫자여야 합니다.`);
    }
  }

  isValidMoveCommand(value) {
    this.isValidInput(value);
  }
}

module.exports = BridgeValidator;
