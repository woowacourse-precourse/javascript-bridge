const BridgeMaker = require('../BridgeMaker');
const { generateRandomNumber } = require('../utils/bridgeHandler');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #myBridge;
  #round = 0;
  #alive;

  createBridge(size) {
    this.#myBridge = BridgeMaker.makeBridge(size, generateRandomNumber);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(select, selectMoving) {
    console.log(this.#myBridge);
    console.log('!!round : ', this.#round);
    console.log('!!solution : ', this.#myBridge[this.#round]);
    this.#alive = this.checkAlive();

    if (this.#round === this.#myBridge.length - 1) {
      console.log('WIN');
      throw new Error('WIN!!');
    }
    this.#round += 1;
  }

  checkAvlie(select) {
    return select === this.#myBridge[this.#round] ? true : false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#round = 0;
  }
}

module.exports = BridgeGame;
