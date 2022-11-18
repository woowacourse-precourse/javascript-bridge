const { MOVEMENT_ERROR } = require('./constant');
const ThrowError = require('./ThrowError');

class MovementVadlidation {
  #movement;
  constructor(movement) {
    this.#movement = movement;
    this.validation = this.#validate(this.#movement);
  }

  showValidationResult() {
    return this.validation;
  }

  #validate(movement) {
    const errorMessage =
      this.#isAlphabet(movement) || this.#isUpperCase(movement) || this.#isCorrect(movement);
    const throwError = new ThrowError(MOVEMENT_ERROR[errorMessage]);
    return errorMessage ? throwError.happen() : movement;
  }

  #isAlphabet(string) {
    return /^[a-z|A-Z|]+$/.test(string) ? false : 'ALPHABET';
  }

  #isUpperCase(string) {
    return /^[A-Z]+$/.test(string) ? false : 'UPPERCASE';
  }

  #isCorrect(string) {
    return ['U', 'D'].includes(string) ? false : 'CORRECT';
  }
}

module.exports = MovementVadlidation;
