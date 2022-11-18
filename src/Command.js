const Validator = require('./Validator');

class Command {
  #command;

  constructor(command) {
    Validator.commandValidityCheck(command);
    this.#command = command;
  }

  shouldRetry() {
    return this.#command === 'R';
  }
}

module.exports = Command;
