/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  constructor(bridge, userBridge) {
    this.bridge = bridge;
    this.userBridge = userBridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(moving) {
    var idx = this.userBridge.length;

    if (this.bridge[idx] == moving) {
      this.userBridge.push(true);
    } else if (this.bridge[idx] != moving) {
      this.userBridge.push(false);
    }

    console.log(this.userBridge);

    return this.userBridge;
    //return userBridge ex) [O, O, O, X]
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {}
}

module.exports = BridgeGame;
