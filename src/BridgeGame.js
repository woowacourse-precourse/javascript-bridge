const { BRIDGE_CONSTANTS } = require('./GameConstants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeAnswer;

  #upMap = [BRIDGE_CONSTANTS.shapeOfBeginning];

  #downMap = [BRIDGE_CONSTANTS.shapeOfBeginning];

  setBridgeAnswer(bridge) {
    this.#bridgeAnswer = bridge;
  }

  getBridgeAnswer() {
    return this.#bridgeAnswer;
  }

  getMaps() {
    return [this.#upMap, this.#downMap];
  }

  eachMapPush(a, b) {
    this.#upMap.push(a);
    this.#downMap.push(b);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, index) {
    if (index > 0) {
      this.eachMapPush(BRIDGE_CONSTANTS.dividingLine, BRIDGE_CONSTANTS.dividingLine);
    }

    const answerShape = this.#bridgeAnswer[index];
    const IS_MOVE = (moving === answerShape);

    if (moving === BRIDGE_CONSTANTS.up) {
      this.selectUp(IS_MOVE);
      return IS_MOVE;
    }

    this.selectDown(IS_MOVE);
    return IS_MOVE;
  }

  selectUp(IS_MOVE) {
    this.#downMap.push(BRIDGE_CONSTANTS.notSelect);
    if (IS_MOVE) {
      this.#upMap.push(BRIDGE_CONSTANTS.success);
      return;
    }

    this.#upMap.push(BRIDGE_CONSTANTS.failure);
  }

  selectDown(IS_MOVE) {
    this.#upMap.push(BRIDGE_CONSTANTS.notSelect);
    if (IS_MOVE) {
      this.#downMap.push(BRIDGE_CONSTANTS.success);
      return;
    }

    this.#downMap.push(BRIDGE_CONSTANTS.failure);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
