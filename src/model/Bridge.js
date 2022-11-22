/**
 * 다리를 생성하는 클래스
 */

const { generate } = require('../BridgeRandomNumberGenerator');
const { makeBridge } = require('../BridgeMaker');

class Bridge {
  // condition: 생성된 다리의 건널 수 있는 칸('U' 또는 'D')들을 저장하는 배열
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
