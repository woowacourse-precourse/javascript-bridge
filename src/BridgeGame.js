/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  size;
  currentStatus = [];
  retryCount = 1;
  

  constructor(bridge, size) {
    this.bridge = bridge;
    this.size = parseInt(size);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userSelect) {
    if (this.bridge[this.currentStatus.length] === userSelect) {
      this.currentStatus.push(true);
    }
    else if (this.bridge[this.currentStatus.length] !== userSelect){
      this.currentStatus.push(false);
    }
    const progressStatus = this.progressTest(this.currentStatus);
    return {currentStatus: this.currentStatus, progressStatus: progressStatus, retryCount: this.retryCount};
  }

  progressTest(currentStatus) {
    const regex = /true+$/;
    if (currentStatus.length === this.size && currentStatus.indexOf(false) === -1)
      return 'end';
    else if (currentStatus.indexOf(false) !== -1 && !regex.test(currentStatus))
      return 'not correct';
    else if (currentStatus.indexOf(false) === -1)
      return 'correct';
    return 'error';
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.retryCount += 1;
    this.currentStatus = [];
  }
}

module.exports = BridgeGame;
