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

    if (!this.hasOnlyNumber(size)) {
      throw new Error('[ERROR] 숫자가 아닌 문자를 입력했습니다. 숫자만 입력해 주세요');
    }
  }

  isEmpty(size) {
    return !size.length;
  }

  hasOnlyNumber(size) {
    return size
      .split('')
      .map((eachLetter) => parseInt(eachLetter, 10))
      .every((number) => Number.isInteger(number));
  }
}

module.exports = BridgeGame;
