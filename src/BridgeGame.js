const Bulider = require('./Builder.js');
const Validation = require('./Validation.js');

class BridgeGame {
  #bridge;
  #movementLogs;

  constructor() {
    this.#movementLogs = [];
  }

  build(size) {
    const builder = new Bulider();

    this.#bridge = builder.buildBridge(size);
  }

  move(movingDirection) {
    Validation.validateDirection(movingDirection);

    const playerPosition = this.#movementLogs.length; // 필드 round 대체 고민중...
    const isCrossable = this.#bridge.isCrossable(playerPosition, movingDirection);

    this.saveMovementLog(isCrossable, movingDirection);
  }

  saveMovementLog(isCrossable, movingDirection) {
    this.#movementLogs.push({ isCrossable, movingDirection });
  }

  retry(gameCommand) {
    Validation.validateGameCommand(gameCommand);
  }

  isMoved() {
    const lastLog = this.#movementLogs[this.#movementLogs.length - 1];

    return lastLog.isCrossable;
  }

  getMovementLogs() {
    return this.#movementLogs;
  }
}

module.exports = BridgeGame;
