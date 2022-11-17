const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');

class BridgeGame {
  #bridge;

  buildBridge(size) {
    this.validateSize(size);
  }

  move() {}

  retry() {}

  validateSize(size) {
    if (this.isEmpty(size)) {
      throw new Error('[ERROR] 입력값이 비었습니다. 값을 입력해주세요');
    }
  }

  isEmpty(size) {
    return !size.length;
  }
}

module.exports = BridgeGame;
