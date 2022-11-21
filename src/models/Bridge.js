const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  setBridge(size) {
    this.#validate(size);
    this.#bridge = makeBridge(size, generate);
  }

  #validate(size) {
    if (this.#isNumber(size) && this.#isInRange(size)) {
      return;
    }

    throw new Error('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
  }

  #isInRange(number) {
    return number >= 3 && number <= 20;
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * 입력받은 칸이 이동할 수 있는 칸인지 비교하는 함수
   * @param {string} direction
   * @param {number} index
   */
  isMovable(direction, index) {
    this.#validateDirection(direction);

    return direction === this.#bridge[index];
  }

  #validateDirection(direction) {
    if (direction === 'U' || direction === 'D') {
      return;
    }

    throw new Error(
      '[ERROR] 이동할 칸은 위(U), 아래(D) 아래 중에 입력할 수 있습니다.',
    );
  }

  size() {
    return this.#bridge ? this.#bridge.length : 0;
  }
}

module.exports = Bridge;
