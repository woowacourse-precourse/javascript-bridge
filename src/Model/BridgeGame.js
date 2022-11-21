const BridgeMaker = require('../BridgeMaker');
const BridgeRanDomNumber = require('../BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;
  #bridge;
  #bridgeIndex = 0;
  
  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = this.generateBridge();
  }

  generateBridge() {
    return BridgeMaker.makeBridge(this.#bridgeSize, BridgeRanDomNumber.generate);
  }

  match(moveAnswer) {
    if (this.#bridge[this.#bridgeIndex] === moveAnswer) {
      this.#bridgeIndex += 1;
      return [moveAnswer, true];
    }
    this.#bridgeIndex += 1;
    return [moveAnswer, false];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveAnswer) {
    const moveResult = this.match(moveAnswer);
    return moveResult;
  }

  checkRemainBridge() {
    if (this.#bridgeIndex !== this.#bridgeSize) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeIndex = 0;
  }
}

module.exports = BridgeGame;
