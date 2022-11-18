/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, position , time) {
    if (position === 'U') {
      return this.checkBridge(bridge[0][time])
    }

    if (position === 'D'){
      return this.checkBridge(bridge[1][time])
    }
  }

  checkBridge(result){
    // X 인 경우 게임 종료 후 다시 할지 여부 파악
    if (result === 'X') {
      return 'X'
    }
    return result
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
