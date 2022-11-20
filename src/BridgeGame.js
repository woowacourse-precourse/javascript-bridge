/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeAnswer;
  currentBridge = [[], []];
  current = 0
  tryCount = 0;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingInput) {
    this.isCorrect(movingInput) ? 
      this.MoveToCorrectBridge(movingInput) : this.MoveToWrongBridge(movingInput);
  }

  isCorrect(movingInput) {
    if (movingInput === this.bridgeAnswer[this.current]) {
      this.index++;
      return true;
    } 
    return false;
  }

  // 정답일 때 실행할 메서드
  MoveToCorrectBridge(movingInput) {
    if (movingInput === 'U') this.makeCorrectUpBridge();
    if (movingInput === 'D') this.makeCorrectDownBridge();
  }

  // 틀렸을 때 실행할 메서드
  MoveToWrongBridge(movingInput) {
    if (movingInput === 'U') this.makeWrongUpBridge();
    if (movingInput === 'D') this.makeWrongDownBridge();
  }

  makeCorrectUpBridge() {
    currentBridge[0].upBridge.push('O');
    currentBridge[1].downBridge.push(' ');
  }

  makeCorrectDownBridge() {
    currentBridge[0].upBridge.push(' ');
    currentBridge[1].downBridge.push('O');
  }

  makeWrongUpBridge() {
    currentBridge[0].upBridge.push('X');
    currentBridge[1].downBridge.push(' ');
  }

  makeWrongDownBridge() {
    currentBridge[0].upBridge.push(' ');
    currentBridge[1].downBridge.push('X');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
