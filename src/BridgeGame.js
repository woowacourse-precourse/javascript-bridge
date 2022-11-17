const { COMMAND } = require("./utils/constans");

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

  isGameSuccess() {
    return this.isAnswerMovingChoice() && this.#isLastMove();
  }

  isAnswerMovingChoice() {
    return (
      this.#movingCommand === this.#bridgeShape[this.#currentBridgeCount - 1]
    );
  }

  #isLastMove() {
    return this.#currentBridgeCount === this.#bridgeShape.length;
  }

  setBridgeShape(bridgeSahpe) {
    return (this.#bridgeShape = bridgeSahpe);
  }

  getCurrentBridgeMap() {
    const upsideBridgeMap = this.#makeAnswerBridgeMap(COMMAND.MOVING.UP);
    const downsideBridgeMap = this.#makeAnswerBridgeMap(COMMAND.MOVING.DOWN);
    if (!this.isAnswerMovingChoice()) {
      upsideBridgeMap[upsideBridgeMap.length - 1] =
        this.#movingCommand === COMMAND.MOVING.UP ? "X" : " ";
      downsideBridgeMap[downsideBridgeMap.length - 1] =
        this.#movingCommand === COMMAND.MOVING.DOWN ? "X" : " ";
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

  getTotalTryCount() {
    return this.#totalTryCount;
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
