/*
 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 BridgeGame에 `필드(인스턴스 변수)`를 추가할 수 있다. 🙆‍♂️
 BridgeGame의 `파일 경로`는 변경할 수 있다. 🙆‍♂️
 BridgeGame의 `메서드 이름`은 변경할 수 없다. 🙅‍♀️
 `인자`는 필요에 따라 추가하거나 변경할 수 있다. 🙆‍♂️
 게임 진행을 위해 필요한 `메서드`를 추가하거나 변경할 수 있다. 🙆‍♂️
 */
const { BRIDGE } = require('./utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentPosition;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentPosition = BRIDGE.start_position;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const moveSuccess = this.#canMove(moving);

    if (moveSuccess) {
      this.#currentPosition += BRIDGE.position_unit;
    }

    return { moveSuccess, isEndOfBridge: this.#canNextMove() };
  }

  #canMove(moving) {
    return this.#bridge.isAccessiblePosition(this.#currentPosition, moving);
  }

  #canNextMove() {
    return this.#bridge.isEndOfBridge(this.#currentPosition);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#currentPosition = BRIDGE.start_position;
  }
}

module.exports = BridgeGame;
