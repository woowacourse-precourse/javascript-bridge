const { makeUserBridge } = require("./BridgeMaker");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(mainBridge) {
    this.mainBridge = mainBridge;
    this.bridgeSize = mainBridge[0].length;
    this.count = 0;
    this.hasNext = true;
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
    console.log(this.mainBridge);
    console.log(this.userBridge);
    this.count++;
    this.isNext();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(readGameCommand, mainBridge) {
    readGameCommand(mainBridge);
  }

  isNext() {
    if (
      this.userBridge.flat().indexOf("X") !== -1 ||
      this.bridgeSize === this.count
    )
      this.hasNext = false;
  }
}

module.exports = BridgeGame;
