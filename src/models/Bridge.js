const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  setBridge(size) {
    this.#bridge = makeBridge(size, generate);
  }

  /**
   * 입력받은 칸이 이동할 수 있는 칸인지 비교하는 함수
   * @param {string} direction
   * @param {number} index
   */
  isMovableCompartment(direction, index) {}
}

module.exports = Bridge;
