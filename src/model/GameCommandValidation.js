const { COMMAND_ERROR } = require('./constant');
const ThrowError = require('./ThrowError');

class GameCommandValidation {
  #command;
  constructor(command) {
    this.#command = command;
    this.validation = this.#validate(this.#command);
  }

  showValidationResult() {
    return this.validation;
  }

  #validate(command) {
    const errorMessage =
      this.#isAlphabet(command) || this.#isUpperCase(command) || this.#isCorrect(command);
    const throwError = new ThrowError(COMMAND_ERROR[errorMessage]);
    return errorMessage ? throwError.happen() : command;
  }

  #isAlphabet(string) {
    return /^[a-z|A-Z|]+$/.test(string) ? false : 'ALPHABET';
  }

  #isUpperCase(string) {
    return /^[A-Z]+$/.test(string) ? false : 'UPPERCASE';
  }

  #isCorrect(string) {
    return ['R', 'Q'].includes(string) ? false : 'CORRECT';
  }
}

module.exports = GameCommandValidation;
