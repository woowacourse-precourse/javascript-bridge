const { Console } = require('@woowacourse/mission-utils');

class BridgeLengthInput {
  #userInput;

  constructor(userInput) {
    this.#userInput = Number(userInput);
  }

  check() {
    try {
      if (this.isNotValidNumber() || this.isNotValidRange() || this.isNotInteger())
        throw new Error(Console.print('[ERROR] 3~20 사이의 숫자만 입력 가능합니다.'));
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
        throw new Error('[ERROR] U 또는 D만 입력 가능합니다.');
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
        throw new Error('[ERROR] Q 또는 R만 입력 가능합니다.');
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
