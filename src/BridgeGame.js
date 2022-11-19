/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  constructor() {
    this.bridge = [];
    this.size = 0;
  }

  play() {
    OutputView.startSentence();
    OutputView.lengthBridgeSentence();
    this.bridgeSize();
    this.readMove();
  }

  bridgeSize() {
    this.size = InputView.readBridgeSize();
  }

  createBridge() {
    this.bridge = BridgeMaker.makeBridge(
      this.size,
      BridgeRandomNumberGenerator.generate
    );
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  readMove() {
    OutputView.pickMoveSentence();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
