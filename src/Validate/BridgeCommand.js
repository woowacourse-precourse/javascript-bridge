const { checkPossibleCommand } = require('../Utils');

class BridgeCommand {
  #command;
  constructor(command) {
    this.#command = command;
  }

  validate() {
    checkPossibleCommand(this.#command);
  }
}

module.exports = BridgeCommand;
