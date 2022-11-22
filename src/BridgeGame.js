const { COMMAND } = require("./constants/game");
const { getArrayLastIndex } = require("./utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerDirections = [];
  #movingCommand = "";
  #corssedBridgeCount = 0;
  #totalTryCount = 1;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingCommand) {
    this.#movingCommand = movingCommand;
    this.#corssedBridgeCount += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#corssedBridgeCount = 0;
    this.#totalTryCount += 1;
  }

  isGameSuccess() {
    return this.isAnswerMovingCommand() && this.#isLastMove();
  }

  isAnswerMovingCommand() {
    const currentBridgeIndex = this.#corssedBridgeCount - 1;
    return this.#movingCommand === this.#answerDirections[currentBridgeIndex];
  }

  setAnswerDirections(answerDirections) {
    return (this.#answerDirections = answerDirections);
  }

  getCorssedBridgeMap() {
    const upside = this.#makeAnswerCorssedBridgeMap(COMMAND.MOVING.UP);
    const downside = this.#makeAnswerCorssedBridgeMap(COMMAND.MOVING.DOWN);
    if (!this.isAnswerMovingCommand()) {
      upside[getArrayLastIndex(upside)] = this.#markNotAnswerBridgeMap(
        COMMAND.MOVING.UP
      );
      downside[getArrayLastIndex(downside)] = this.#markNotAnswerBridgeMap(
        COMMAND.MOVING.DOWN
      );
    }
    return { upside, downside };
  }

  getTotalTryCount() {
    return this.#totalTryCount;
  }

  #makeAnswerCorssedBridgeMap(direction) {
    return this.#getCorssedAnswerDirections().map((answerDirection) => {
      return answerDirection === direction ? "O" : " ";
    });
  }

  #markNotAnswerBridgeMap(direction) {
    return this.#movingCommand === direction ? "X" : " ";
  }

  #isLastMove() {
    return this.#corssedBridgeCount === this.#answerDirections.length;
  }

  #getCorssedAnswerDirections() {
    return this.#answerDirections.slice(0, this.#corssedBridgeCount);
  }
}

module.exports = BridgeGame;
