const { Console } = require('@woowacourse/mission-utils');
const ERROR = require('../Constants/ErrorMessage');
const OutputView = require('../OutputView');

class BridgeLengthInput {
  #userInput;

  constructor(userInput) {
    this.#userInput = Number(userInput);
  }

  check() {
    try {
      if (this.isNotValidNumber() || this.isNotValidRange() || this.isNotInteger())
        throw new Error(OutputView.ErrorMessage(ERROR.INVALID_LENGTH));
      return true;
    } catch {
      return false;
    }
  }

  isNotValidRange() {
    return this.#userInput < 3 || this.#userInput > 20;
  }

  isNotValidNumber() {
    return isNaN(this.#userInput);
  }
  isNotInteger() {
    return !Number.isInteger(this.#userInput);
  }
}

class DirectionChoiceInput {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
  }

  check() {
    try {
      if (!this.isValidInput())
        throw new Error(OutputView.ErrorMessage(ERROR.MOVE_ORDER));
      return true;
    } catch {
      return false;
    }
  }
  isValidInput() {
    return this.#userInput === 'U' || this.#userInput === 'D';
  }
}

class RetryInput {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
  }

  check() {
    try {
      if (!this.isValidInput())
        throw new Error(OutputView.ErrorMessage(ERROR.RETRY_COMMAND));
      return true;
    } catch {
      return false;
    }
  }

  isValidInput() {
    return this.#userInput === 'Q' || this.#userInput === 'R';
  }
}

module.exports = { BridgeLengthInput, DirectionChoiceInput, RetryInput };
