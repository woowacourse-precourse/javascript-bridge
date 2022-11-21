const ERROR = require('../constants/error');
const Validator = require('../Validator');

class Bridge {
  #bridge = [];

  canMove(moveCount, moving) {
    return this.#bridge[moveCount] === moving;
  }

  setBridge(bridge) {
    this.validateBridge(bridge);
    this.#bridge = bridge;
  }

  getBridgeSize() {
    return this.#bridge.length;
  }

  validateBridge(bridge) {
    if (!Validator.isBridgeSize(bridge.length)) throw new Error(ERROR.BRIDGE_SIZE);

    bridge.forEach((moving) => {
      if (!Validator.isMoving(moving)) throw new Error(ERROR.BRIDGE);
    });
  }
}

module.exports = Bridge;
