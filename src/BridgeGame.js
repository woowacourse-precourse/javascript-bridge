const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #position;
  #totalTrial;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    this.#position = 0;
    this.#totalTrial = 1;
  }

  isFinished() {
    return this.#position >= this.#bridge.length;
  }

  canMove(command) {
    return !this.isFinished() && command === this.#bridge[this.#position];
  }

  geNextRound() {
    this.#position += 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    if (this.canMove(command)) {
      this.geNextRound();
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    if (command === "R") {
      this.#position = 0;
      this.#totalTrial += 1;
    }
  }
}

module.exports = BridgeGame;
