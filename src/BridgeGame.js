/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge;
    this.result = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * 
   * 성공, 실패 여부를 배열에 저장한다.
   * EX) ['U', 'D', 'fail']
   */
  move(movingInfo) {
    const compareIndex = this.result.length;

    if (this.bridge[compareIndex] === movingInfo) {
      this.result.push([movingInfo, 'success']);
      return true;
    } 
      
    this.result.push([movingInfo, 'fail']);
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
