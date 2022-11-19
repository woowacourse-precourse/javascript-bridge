const { COMMAND } = require('../constant');
const Validator = require('../Validator');

class Command {
  #command;

  constructor(command) {
    Validator.commandValidityCheck(command);
    this.#command = command;
    this.shouldRetry();
  }

  shouldRetry() {
    return this.#command === COMMAND.RETRY;
  }
}

module.exports = Command;
