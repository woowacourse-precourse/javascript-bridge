const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE_SHAPE, VALID_CHAR } = require("./constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridgeSize = 0;
    this.correctBridge = "";
    this.currentStep = 0;
    this.upLineOfBridge = BRIDGE_SHAPE.START;
    this.downLineOfBridge = BRIDGE_SHAPE.START;
    this.try = 1;
    this.state = false;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  init(bridgeSize) {
    this.bridgeSize = parseInt(bridgeSize);
    this.correctBridge = BridgeMaker.makeBridge(this.bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  move(movingStep) {
    this.state = this.correctBridge[this.currentStep] === movingStep;

    if (this.state) this.drawBridge(movingStep, BRIDGE_SHAPE.SUCCESS);
    else this.drawBridge(movingStep, BRIDGE_SHAPE.FAILURE);

    this.currentStep++;
    OutputView.printMap(this.upLineOfBridge, this.downLineOfBridge);

    if (!this.state) return InputView.readGameCommand(this);
    if (this.currentStep === this.bridgeSize) return OutputView.printResult(this.upLineOfBridge, this.downLineOfBridge, "성공", this.try); //최종 게임 결과 출력
    return InputView.readMoving(this);
  }

  drawBridge(movingStep, bridgeShape) {
    this.delimiter();
    if (movingStep === VALID_CHAR.UP) {
      this.upLineOfBridge += bridgeShape;
      this.downLineOfBridge += BRIDGE_SHAPE.BLANK;
    }
    else {
      this.upLineOfBridge += BRIDGE_SHAPE.BLANK;
      this.downLineOfBridge += bridgeShape;
    }
  }

  delimiter() {
    if (this.currentStep === 0) return;
    this.upLineOfBridge += BRIDGE_SHAPE.DELIMITER;
    this.downLineOfBridge += BRIDGE_SHAPE.DELIMITER;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() { }
}

module.exports = BridgeGame;
