/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(moving, bridge, location) {
    const isSuccess = bridge[location] === moving;

    return isSuccess;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.retry();
  }
}

module.exports = BridgeGame;
