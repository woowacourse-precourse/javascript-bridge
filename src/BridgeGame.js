/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(dir, bridge, now) {
    console.log("this is bridgegame class console");
    console.log(dir);
    console.log(bridge);

    if (dir === "U") {
      this.moveUp(bridge, now);
    }
    if (dir === "D") {
      this.moveDown(bridge, now);
    }
  }

  moveUp(bridge, now) {
    if (bridge[0][now] == 1) {
    }

    if (bridge[0][now] == 0) {
    }
  }
  moveDown(bridge, now) {
    if (bridge[1][now] == 1) {
    }

    if (bridge[1][now] == 0) {
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
