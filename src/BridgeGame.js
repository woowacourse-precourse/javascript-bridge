const { Console } = require('@woowacourse/mission-utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeModel;
  constructor({ BridgeRandomNumberGenerator, bridgeMaker }, { outputView, inputView }) {
    this.bridgeRandomNumberGenerator = BridgeRandomNumberGenerator;
    this.bridgeMaker = bridgeMaker;
    this.outputView = outputView;
    this.inputView = inputView;
    this.start();
    this.askBridgeSize();
  }

  start() {
    this.outputView.printStartMessage();
  }

  askBridgeSize() {
    this.inputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(size) {
    this.bridgeModel = this.bridgeMaker.generateBridgeModel(
      size,
      this.bridgeRandomNumberGenerator.generate
    );

    Console.print(this.bridgeModel.bridge);
    Console.close();
  }

  print() {}
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  resetMove() {}

  checkState() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
