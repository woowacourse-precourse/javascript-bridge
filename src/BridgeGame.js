/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  validateBridgeSize(size) {
    if (this.isInvalidBridgeSize(size)) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }

  validateMoving(moving) {
    if (this.isInvalidMoving(moving)) {
      throw new Error("[ERROR] 위로 이동하려면 U, 아래로 이동하려면 D를 입력해야 합니다.");
    }
  }

  isInvalidBridgeSize(size) {
    return Number.isNaN(size) || !Number.isInteger(size) || size < 3 || size > 20;
  }

  isInvalidMoving(moving) {
    return moving !== "U" && moving !== "D";
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
