const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userPos;
  #isSuccess;

  constructor() {
    this.#bridge = [];
    this.#isSuccess = false;
    this.#userPos = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMove) {
    console.log('현재 idx: ', this.#userPos);
    this.checkMove(this.#bridge[this.#userPos], userMove);
    if (!this.#isSuccess) {
      this.#userPos = 0;
      return;
    }
    this.#userPos++;
    return !!this.#isSuccess;
  }

  checkMove(bridge, userMove) {
    console.log('체크: 현재 bridge',bridge,'현재 user', userMove);
    this.#isSuccess = bridge === userMove;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  init(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    console.log('set bridge array: ',this.#bridge);
  }
}

module.exports = BridgeGame;
