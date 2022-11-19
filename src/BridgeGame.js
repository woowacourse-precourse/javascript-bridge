const Bulider = require('./Builder.js');
const { DOWNSIDE_SYMBOL, UPSIDE_SYMBOL } = require('./constants/condition.js');
const { ERROR_MSG } = require('./constants/message.js');

class BridgeGame {
  #bridge;
  #movementLog;

  constructor() {
    this.#movementLog = [];
  }

  build(size) {
    const builder = new Bulider();

    this.#bridge = builder.buildBridge(size);
  }

  move(movingDirection) {
    this.#validateDirection(movingDirection);
  }

  retry() {}

  #validateDirection(direction) {
    if (!direction) throw new Error(ERROR_MSG.emptyInput);

    if (!this.#isValidDirectionSymbol(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  #isValidDirectionSymbol(direction) {
    return direction === DOWNSIDE_SYMBOL || direction === UPSIDE_SYMBOL;
  }
}

module.exports = BridgeGame;
