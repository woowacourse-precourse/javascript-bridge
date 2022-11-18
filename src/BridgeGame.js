const WinningBridge = require('./WinningBridge');
const CurrBridge = require('./CurrBridge');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryingCount = 1;

  constructor(controller) {
    this.controller = controller;
    this.winningBridge;
    this.currBridge;
  }

  // 사용자가 건널 다리를 만드는 메서드
  makeWinningBridge(size) {
    this.winningBridge = new WinningBridge(size);
    this.winningBridge.makeWinningBridge(size);

    this.controller.inputMoving();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.currBridge = new CurrBridge(direction);

    this.#tryingCount += 1;
    const canMove = this.currBridge.canMove(direction, this.winningBridge);
    console.log(canMove);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
