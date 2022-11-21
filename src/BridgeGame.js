const { ERROR_MESSAGES } = require('./constants/Messages');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');

const BRIDGE_RANGE = {
  START: 3,
  END: 20,
};

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static BRIDGE_SHAPE = {
    D: 0,
    U: 1,
  };

  #tryCount = 1;

  #result = false;

  #randomBridge = [];

  #userBridge = [];

  static #validateSize(size) {
    if (size.length === 0) {
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE.EMPTY);
    }
    if (!(size >= BRIDGE_RANGE.START && size <= BRIDGE_RANGE.END)) {
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE.RANGE);
    }
  }

  setRandomBridge(size) {
    BridgeGame.#validateSize(size);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#randomBridge = bridge;
  }

  setUserBlock(block) {
    this.#userBridge.push(block);
  }

  resetUserBridge() {
    this.#userBridge = [];
  }

  static isFail(formattedBridges) {
    return formattedBridges.flat().find((block) => block === 'X');
  }

  isSuccess(formattedBridges) {
    return formattedBridges[0].length === this.#randomBridge.length;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    return this.#userBridge.reduce(
      (acc, block, index) => {
        if (this.#randomBridge[index] === 'D') {
          acc[0].push(this.#randomBridge[index] === block ? 'O' : 'X');
          acc[1].push(' ');
        } else {
          acc[1].push(this.#randomBridge[index] === block ? 'O' : 'X');
          acc[0].push(' ');
        }
        return acc;
      },
      [[], []],
    );
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.resetUserBridge();
  }
}

module.exports = BridgeGame;
