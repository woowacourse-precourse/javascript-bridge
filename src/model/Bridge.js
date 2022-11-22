/**
 * 다리를 생성하는 클래스
 */

const { generate } = require('../BridgeRandomNumberGenerator');
const { makeBridge } = require('../BridgeMaker');

class Bridge {
  condition;
  constructor() {
    this.condition = [];
  }

  /**
   * 'U', 'D'로 다리를 생성하는 메서드
   * @param {number} bridgeSize 다리 길이
   */
  setBridge(bridgeSize) {
    this.condition = makeBridge(bridgeSize, generate);
  }
}

module.exports = Bridge;
