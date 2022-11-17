/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeShape = [];
  #totalTryCount = 1;
  #currentBridgeCount = 0;
  #movingCommand = "";
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingCommand) {
    this.#movingCommand = movingCommand;
    this.#currentBridgeCount += 1;
  }

  isNextMove() {
    return this.isAnswerMovingChoice() && !this.#isLastMove();
  }

  isAnswerMovingChoice() {
    return (
      this.#movingCommand ===
      this.getBridgeShape()[this.#currentBridgeCount - 1]
    );
  }

  #isLastMove() {
    return this.#currentBridgeCount === this.getBridgeShape().length;
  }

  setBridgeShape(bridgeSahpe) {
    return (this.#bridgeShape = bridgeSahpe);
  }

  // 나중에 필요없을 지도? 지금 console때문에 잠시 생성
  getBridgeShape() {
    return this.#bridgeShape;
  }

  getCurrentBridgeMap() {
    const upsideBridgeMap = this.#makeAnswerBridgeMap("U");
    const downsideBridgeMap = this.#makeAnswerBridgeMap("D");
    if (!this.isAnswerMovingChoice()) {
      upsideBridgeMap[upsideBridgeMap.length - 1] =
        this.#movingCommand === "U" ? "X" : " ";
      downsideBridgeMap[downsideBridgeMap.length - 1] =
        this.#movingCommand === "D" ? "X" : " ";
    }
    return { upsideBridgeMap, downsideBridgeMap };
  }

  #getCurrentBridgeShape() {
    return this.#bridgeShape.slice(0, this.#currentBridgeCount);
  }

  #makeAnswerBridgeMap(upDown) {
    return this.#getCurrentBridgeShape().map((alpabet) =>
      alpabet === upDown ? "O" : " "
    );
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#currentBridgeCount = 0;
    this.#totalTryCount += 1;
  }
}

module.exports = BridgeGame;
