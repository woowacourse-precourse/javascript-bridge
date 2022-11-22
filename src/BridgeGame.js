const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const { MESSAGE, ERROR, MOVING, COMMAND, MAP, SIZE } = require("./constants/constant");

class BridgeGame {
  #bridge;
  #movings = [];
  #trialCount = 1;

  makeBridge(size) {
    this.validateBridgeSize(size);
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  move(moving) {
    this.validateMoving(moving);
    this.#movings.push(moving);
  }

  retry() {
    this.#movings = [];
    this.#trialCount += 1;
  }

  getMap(line) {
    const marks = this.#movings.map((moving, index) => {
      if (moving === line && this.#bridge[index] === line) return MAP.O;
      if (moving === line && this.#bridge[index] !== line) return MAP.X;
      return MAP.BLANK;
    }).join(MAP.BAR);
    return MAP.BRACKET(marks);
  }

  getResult() {
    const hasMovedCorrectly = this.#movings.every((moving, index) => moving === this.#bridge[index]);
    const hasMovedAllBridge = this.#movings.length === this.#bridge.length;
    if (!hasMovedCorrectly) return MESSAGE.FAILURE;
    if (hasMovedCorrectly && hasMovedAllBridge) return MESSAGE.SUCCESS;
  }

  getTrialCount() {
    return this.#trialCount;
  }

  validateBridgeSize(size) {
    if (this.isInvalidBridgeSize(size)) {
      throw new Error(ERROR.INVALID_BRIDGE_SIZE);
    }
  }

  validateMoving(moving) {
    if (this.isInvalidMoving(moving)) {
      throw new Error(ERROR.INVALID_MOVING);
    }
  }

  validateGameCommand(gameCommand) {
    if (this.isInvalidGameCommand(gameCommand)) {
      throw new Error(ERROR.INVALID_GAME_COMMAND);
    }
  }

  isInvalidBridgeSize(size) {
    return Number.isNaN(size) || !Number.isInteger(size) || size < SIZE.MINIMUM || size > SIZE.MAXIMUM;
  }

  isInvalidMoving(moving) {
    return moving !== MOVING.UP && moving !== MOVING.DOWN;
  }

  isInvalidGameCommand(gameCommand) {
    return gameCommand !== COMMAND.RETRY && gameCommand !== COMMAND.QUIT;
  }
}

module.exports = BridgeGame;
