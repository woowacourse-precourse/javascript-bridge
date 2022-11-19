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

    const playerPosition = this.#movementLog.length; // 필드 round 대체 고민중...
    const isCrossable = this.#bridge.isCrossable(playerPosition, movingDirection);

    this.saveMovementLog(isCrossable, movingDirection);
  }

  saveMovementLog(isCrossable, movingDirection) {
    this.#movementLog.push({ isCrossable, movingDirection });
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
