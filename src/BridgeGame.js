const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { USER_INPUT_CODE, MOVEMENT_LOG_CODE } = require('./constants');

class BridgeGame {
  constructor(size) {
    this.setBridge(size);
  }

  move(direction) {
    this.tryCount += 1;
    const location = this.course.length;
    if(this.bridge[location] === direction) return this.course.push(direction);
    if(direction === USER_INPUT_CODE.MOVE.UPPER) return this.course.push(MOVEMENT_LOG_CODE.FAILED.UPPER);
    if(direction === USER_INPUT_CODE.MOVE.LOWER) return this.course.push(MOVEMENT_LOG_CODE.FAILED.LOWER);
  }

  retry() {
    this.course = [];
  }
  
  setBridge(size) {
    this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.tryCount = 0;
    this.course = [];
  }
}

module.exports = BridgeGame;
