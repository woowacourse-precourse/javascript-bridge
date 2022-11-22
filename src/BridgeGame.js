const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { validateBridgeMove } = require("./Validation");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(inputView, outputView, length) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.bridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate,
    );
    this.gameCount = 1;
    this.count = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.inputView.readMoving(this.handleBridgeMove.bind(this));
  }

  handleBridgeMove(move) {
    validateBridgeMove(move);
    if (this.bridge[this.count] !== move) {
      // 게임 실패
      this.outputView.printMap(this.count, false, this.bridge);
      return;
    }

    this.count += 1;
    this.outputView.printMap(this.count, true, this.bridge);

    if (this.bridge.length === this.count) {
      this.outputView.printResult(true, this.gameCount);
      return;
    }

    this.move();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
