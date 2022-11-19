const WinningBridge = require('./WinningBridge');
const CurrBridge = require('./CurrBridge');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryingCount = 1;

  constructor() {
    this.winningBridge;
    this.currBridge = new CurrBridge();
  }

  // 사용자가 건널 다리를 만드는 메서드
  makeWinningBridge(size) {
    this.winningBridge = new WinningBridge(size);
    this.winningBridge.makeWinningBridge(size);
  }

  validate(direction) {
    this.currBridge.validate(direction);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const canMove = this.currBridge.canMove(direction, this.winningBridge);
    this.currBridge.makeBridge(direction, canMove);

    const [upperBridge, lowerBridge] = this.currBridge.getBridge();
    return [canMove, upperBridge, lowerBridge];
  }

  isFinished() {
    return this.currBridge.isLast(this.winningBridge);
  }

  getResult() {
    const [upperBridge, lowerBridge] = this.currBridge.getBridge();
    const isSucceeded = this.isFinished();
    return [this.#tryingCount, isSucceeded, upperBridge, lowerBridge];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryingCount += 1;
    console.log(this.#tryingCount);
  }
}

module.exports = BridgeGame;
