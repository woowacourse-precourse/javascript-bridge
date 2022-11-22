/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  constructor(bridge, userBridge) {
    this.bridge = bridge;
    this.userBridge = userBridge;
    this.attemptCnt = 1;
  }
  //사용자가 칸을 이동할 때 사용하는 메서드
  move(moving) {
    var idx = this.userBridge.length;

    if (this.bridge[idx] == moving) {
      this.userBridge.push(true);
    } else if (this.bridge[idx] != moving) {
      this.userBridge.push(false);
    }

    return this.userBridge;
  }

  //사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {
    this.attemptCnt += 1;
    this.userBridge = [];
  }
}

module.exports = BridgeGame;
