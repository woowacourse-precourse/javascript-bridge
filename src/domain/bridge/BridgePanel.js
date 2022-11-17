const BridgeDirection = require('./BridgeDirection');

class BridgePanel {
  #temperedDirection;

  constructor(direction) {
    BridgePanel.validate(direction);
    this.#temperedDirection = direction;
  }

  static validate(direction) {
    if (!BridgeDirection.includes(direction)) {
      throw new Error('[ERROR] 방향이 존재하지 않습니다.');
    }
  }

  checkTempered(direction) {
    BridgePanel.validate(direction);
    return this.#temperedDirection === direction;
  }
}

module.exports = BridgePanel;
