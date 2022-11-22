const Validation = require("./Validation");
const BridgeStep = require("./BridgeStep");
const { makeBridge } = require("./BridgeMaker.js");
const { generate } = require("./BridgeRandomNumberGenerator.js");

class BridgeGame {
  #bridge;
  #movingRecord;
  #tryCount;

  constructor() {
    this.#movingRecord = [];
    this.#tryCount = 1;
  }

  build(size) {
    this.#bridge = this.buildBridge(size);
  }

  buildBridge(size) {
    Validation.checkBridgeSize(size);

    const bridgeKeys = makeBridge(Number(size), generate);
    return new BridgeStep(bridgeKeys);
  }

  move(direction) {
    Validation.validateDirection(direction);

    const playerPosition = this.#movingRecord.length;
    const checkPass = this.#bridge.checkPass(playerPosition, direction);

    this.saveMovingRecord(checkPass, direction);
  }

  saveMovingRecord(checkPass, direction) {
    this.#movingRecord.push({ checkPass, direction });
  }
}

module.exports = BridgeGame;
