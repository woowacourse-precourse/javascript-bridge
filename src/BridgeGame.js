const { makeUserBridge } = require("./BridgeMaker");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(mainBridge) {
    this.mainBridge = mainBridge;
    this.bridgeSize = mainBridge.length;
    this.count = 0;
    this.retrycount = 1;
    this.hasNext = true;
    this.finish = false;
    this.userBridge = [[], []];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    this.userBridge = makeUserBridge(
      moveInput,
      this.userBridge,
      this.mainBridge
    );
    this.count++;
    this.retry();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    if (
      this.userBridge.flat().indexOf("X") === -1 &&
      this.bridgeSize === this.count
    ) {
      this.hasNext = false;
      this.finish = true;
      return;
    }

    if (this.userBridge.flat().indexOf("X") !== -1) {
      this.hasNext = false;
      this.retrycount++;
    }
  }

  init() {
    this.userBridge = [[], []];
    this.count = 0;
    this.hasNext = true;
  }
}

module.exports = BridgeGame;
