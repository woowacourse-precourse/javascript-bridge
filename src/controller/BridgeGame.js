const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../model/BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #round = -1;
  #inputs = [];

  makeBridgeInfo(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movement) {
    const roundMoveable = this.#moveRound(movement);
    this.#inputs.push({ move: movement, moveable: roundMoveable ? true : false });
    return this.#inputs;
  }

  #moveRound(movement) {
    this.#round += 1;
    return this.#bridge[this.#round] === movement;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
