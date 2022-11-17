const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { BRIDGE_REQUIREMENTS } = require('./constants');

class BridgeGame {
  constructor(size) {
    this.setBridge(size);
  }

  move(direction) {
    const location = this.course.length;
    if(this.bridge[location] === direction) return this.course.push(direction);
    if(direction === BRIDGE_REQUIREMENTS.UPPER_CODE) return this.course.push(BRIDGE_REQUIREMENTS.UPPER_FAILED_CODE);
    if(direction === BRIDGE_REQUIREMENTS.LOWER_CODE) return this.course.push(BRIDGE_REQUIREMENTS.LOWER_FAILED_CODE);
  }

  retry() {}
  
  setBridge(size) {
    this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.course = [];
  }
}

module.exports = BridgeGame;
