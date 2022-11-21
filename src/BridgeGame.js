const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./Utils/BridgeRandomNumberGenerator');
const { USER_INPUT_CODE, MOVEMENT_LOG_CODE } = require('./constants');

class BridgeGame {
  #bridge;
  #movementLog;
  #tryCount;  

  constructor(size) {
    this.setBridge(size);
  }

  getTryCount(){
    return this.#tryCount;
  }

  getMovementLog(){
    return this.#movementLog;
  }

  move(direction) {
    const distance = this.#movementLog.length;
    const nextSpace = this.#bridge[distance];
    if(direction === nextSpace) return this.#movementLog.push(direction);
    if(direction === USER_INPUT_CODE.MOVE.UPPER) return this.#movementLog.push(MOVEMENT_LOG_CODE.FAILED.UPPER);
    if(direction === USER_INPUT_CODE.MOVE.LOWER) return this.#movementLog.push(MOVEMENT_LOG_CODE.FAILED.LOWER);
  }

  retry() {
    this.#tryCount += 1;
    this.#movementLog = [];
  }
  
  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#tryCount = 1;
    this.#movementLog = [];
  }

  isFailed() {
    const lastLog = this.#movementLog.slice(-1).join('');
    const failedCodes = Object.values(MOVEMENT_LOG_CODE.FAILED);
    if(failedCodes.includes(lastLog)) return true;
  }

  isClear() {
    const passedSpaces = this.#movementLog.length;
    if(passedSpaces === this.#bridge.length) return true;
  }
}

module.exports = BridgeGame;
