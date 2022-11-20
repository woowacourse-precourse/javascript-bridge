const { RESULT, DIRECTION, COMMAND } = require('./Constants/constant');
const Validator = require('./Validator');

class BridgeGame {
  #bridge;

  #records;

  #retry;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#retry = 1;
    this.#records = [];
  }

  move(direction, records = this.#records) {
    Validator.checkCorrectDirection(direction);
    const dir = BridgeGame.isSelectUpper(direction)
      ? DIRECTION.up
      : DIRECTION.down;
    return this.recordDirection(dir, records);
  }

  static isSelectUpper(direction) {
    Validator.checkCorrectDirection(direction);
    if (direction === DIRECTION.up) return true;
    return false;
  }

  recordDirection(direction, records) {
    this.#records = [...records, direction];
  }

  retry() {
    this.addRetryCount(1);
    this.initRecords();
  }

  addRetryCount(count) {
    this.#retry += count;
  }

  initRecords() {
    this.#records = [];
  }

  static createTokens(size, generateRandomNumber) {
    const tokens = [];
    let count = 0;
    while (count < size) {
      tokens.push(generateRandomNumber());
      count += 1;
    }
    return tokens;
  }

  getCurrentDistance() {
    return this.#records.length - 1;
  }

  static process(game, direction) {
    return game.move(direction);
  }

  isEndOfBridge() {
    if (this.#records.length === this.#bridge.length) return true;
    return false;
  }

  getRetryCount() {
    return this.#retry;
  }

  getBridge() {
    return this.#bridge;
  }

  getRecords() {
    return this.#records;
  }

  getGameResult() {
    if (this.isGameSuccess()) return RESULT.success;
    return RESULT.fail;
  }

  isGameSuccess() {
    if (
      this.isEndOfBridge() &&
      this.#bridge[this.getCurrentDistance()] ===
        this.#records[this.getCurrentDistance()]
    )
      return true;
    return false;
  }

  isSameDirection() {
    if (
      this.#records[this.getCurrentDistance()] ===
      this.#bridge[this.getCurrentDistance()]
    )
      return true;
    return false;
  }

  static isWrongDirection(game) {
    if (!game.isSameDirection()) return true;
    return false;
  }

  static isCommandRetry(command) {
    Validator.checkCorrectCommand(command);
    if (command === COMMAND.retry) return true;
    return false;
  }
}

module.exports = BridgeGame;
