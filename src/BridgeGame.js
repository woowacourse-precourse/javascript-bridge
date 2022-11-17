/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  marker = 0;

  constructor(bridge) {
    this.bridge = bridge;
  }

  // 사용자가 칸을 이동할 때 사용하는 메서드
  move(nextStep) {
    if (nextStep === this.bridge[this.marker]) {
      this.marker += 1;
    } else {
      throw new Error(
        `${this.marker - 1} -> ${
          this.marker
        } 위치에서 틀린 길을 입력하였습니다.`
      );
    }
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {}
}

module.exports = BridgeGame;
