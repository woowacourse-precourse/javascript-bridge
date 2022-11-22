const BridgeMaker = require("./BridgeMaker.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeUtil = require("./BridgeUtil.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  bridgeArray = [];
  moveInput = [];
  constructor() {
    this.gameRetryCount = 1;
  }
  makeBridge(input) {
    this.bridgeArray = BridgeMaker.makeBridge(
      parseInt(input),
      BridgeRandomNumberGenerator.generate
    );
  }
  initializeMove() {
    this.gameRetryCount++;
    this.moveInput = [];
    this.move();
  }
  move() {
    BridgeUtil.getUserInput(this);
  }
  validate() {
    BridgeUtil.printBridge(this.bridgeArray, this.moveInput);
    this.retry();
  } //outputview 그리기

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    if (!BridgeUtil.validateUserInput(this.bridgeArray, this.moveInput)) {
      BridgeUtil.printRetryCommand(this);
      return;
    }
    if (this.bridgeArray.length === this.moveInput.length) {
      BridgeUtil.printGameResult(this);
      return;
    }
    this.move();
  }
}

module.exports = BridgeGame;
