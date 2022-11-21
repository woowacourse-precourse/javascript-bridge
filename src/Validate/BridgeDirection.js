const { checkPossibleDirection } = require('../Utils/ValidateUtils.js');

class BridgeDirection {
  #command;
  constructor(command) {
    this.#command = command;
  }

  validate() {
    checkPossibleDirection(this.#command);
  }
}

module.exports = BridgeDirection;
