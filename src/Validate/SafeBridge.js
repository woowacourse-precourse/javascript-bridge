const { checkPossibleCommand } = require('../Utils');

class SafeBridge {
  #command;
  constructor(command) {
    this.#command = command;
  }

  validate() {
    checkPossibleCommand(this.#command);
  }
}

module.exports = SafeBridge;
