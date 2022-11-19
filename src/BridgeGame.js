const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #playerLocation
  #bridgeShape
  #playerMoving

  constructor(size){
    this.#bridgeShape = makeBridge(size, generate);
    this.#playerLocation = -1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(playerMoving) {
    if(this.#bridgeShape.length-1 > this.#playerLocation){
      this.#playerLocation++;
      this.#playerMoving = playerMoving;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#playerLocation = -1;
  }

  isFinish() {
    if (this.#bridgeShape.length-1 <= this.#playerLocation)
      return true;
    
    return false;
  }

  isSuccess() {
    const bridgeFootboard = this.#bridgeShape[this.#playerLocation];
    const isSuccess = (bridgeFootboard == this.#playerMoving);
    
    return isSuccess;
  }
}

module.exports = BridgeGame;
