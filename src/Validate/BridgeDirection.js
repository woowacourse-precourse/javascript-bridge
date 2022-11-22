const { checkPossibleDirection } = require('../Utils/ValidateUtils.js');

class BridgeDirection {
  #direction;

  constructor(direction) {
    this.#direction = direction;
  }

  validate() {
    checkPossibleDirection(this.#direction);
  }
}

module.exports = BridgeDirection;
