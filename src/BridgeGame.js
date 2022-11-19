/**
 * 다리 건너기 게임을 관리하는 클래스
 * + 필드 추가 가능
 * + 파일 경로 변경 가능
 * + 메서드 이름 변경 불가능
 * + 인자 추가 가능
 */
class BridgeGame {
  constructor(bridge) {
    this.answerSteps = bridge;
    this.bridgeSteps = [];
    this.gameCount = 1;
    this.gameStatus = '';
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const lastIdx = this.bridgeSteps.length - 1;
    if (
      this.bridgeSteps[lastIdx] === this.answerSteps[lastIdx] &&
      lastIdx === this.answerSteps.length - 1
    ) {
      return 'WIN';
    }
    if (this.bridgeSteps[lastIdx] === this.answerSteps[lastIdx]) {
      return 'MOVE';
    }
    return 'FAIL';
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
