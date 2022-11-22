const { checkPossibleCommand } = require('../Utils/ValidateUtils.js');

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
