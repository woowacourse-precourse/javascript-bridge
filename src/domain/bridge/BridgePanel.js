const BridgeDirection = require('./BridgeDirection');

class BridgePanel {
  #temperedDirection;

  constructor(direction) {
    BridgeDirection.validate(direction);
    this.#temperedDirection = direction;
  }

  checkTempered(direction) {
    BridgeDirection.validate(direction);
    return this.#temperedDirection === direction;
  }
}

module.exports = BridgePanel;
