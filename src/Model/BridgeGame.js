const Validation = require("../Validation");
const BridgeStep = require("./BridgeStep");
const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");

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
    Validation.checkDirection(direction);

    const playerPosition = this.#movingRecord.length;
    const checkPass = this.#bridge.checkPass(playerPosition, direction);

    this.saveMovingRecord(checkPass, direction);
  }

  saveMovingRecord(checkPass, direction) {
    this.#movingRecord.push({ checkPass, direction });
  }

  retry() {
    this.#movingRecord = [];
    this.#tryCount += 1;
  }

  isSucceed() {
    const lastRecord = this.#movingRecord[this.#movingRecord.length - 1];

    return lastRecord.checkPass;
  }

  isLastGame() {
    const clearCount = this.#movingRecord.length;
    const checkAllPass = this.#bridge.checkAllPass(clearCount);
    const isSucceed = this.isSucceed();

    return checkAllPass && isSucceed;
  }

  getMoveRecord() {
    return this.#movingRecord;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
