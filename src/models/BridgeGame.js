const Bridge = require('./Bridge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #map = [];

  makeBridge(bridgeSize) {
    this.#bridge = new Bridge(bridgeSize);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(round, direction) {
    this.#validateDirection(direction);

    const map = this.#map;
    const movingState = this.#bridge.isMovable(round, direction);
    map.push([direction, movingState]);

    return { map, movingState };
  }

  #validateDirection(direction) {
    if (direction === 'U' || direction === 'D') {
      return;
    }

    throw new Error(
      '[ERROR] 이동할 칸은 위(U), 아래(D) 아래 중에 입력할 수 있습니다.',
    );
  }

  isLastRound(round) {
    if (!this.#bridge) {
      return false;
    }

    return round >= this.#bridge.size();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    this.#validateCommand(command);

    return command === 'R';
  }

  #validateCommand(command) {
    if (command === 'R' || command === 'Q') {
      return;
    }

    throw new Error(
      '[ERROR] 게임을 다시 시도 하려면 R, 종료하려면 Q를 대문자로 입력해주세요.',
    );
  }
}

module.exports = BridgeGame;
