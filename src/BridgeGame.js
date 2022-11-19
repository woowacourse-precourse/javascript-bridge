const { Console } = require('@woowacourse/mission-utils');
const GAME_SIGNATURE = require('./utils/constant');
const { askRestart } = require('./utils/message');

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
    //TODO: makeBridgeModel로 수정 (make 통일)
    this.bridgeModel = this.bridgeMaker.generateBridgeModel(
      size,
      this.bridgeRandomNumberGenerator.generate
    );
    //!: 출력 확인
    Console.print(`makeBridge 결과: ${this.bridgeModel.bridge}`);
    this.askMoveDirection();
  }

  askMoveDirection() {
    this.inputView.readMoving(this.move.bind(this));
  }

  print() {}
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.bridgeModel.move(direction);
    this.outputView.printMap(this.bridgeModel.trials);

    if (this.bridgeModel.status === GAME_SIGNATURE.gameOn) {
      this.askMoveDirection();
    } else if (this.bridgeModel.status === GAME_SIGNATURE.gameFail) {
      this.askRetry();
    } else if (this.bridgeModel.status === GAME_SIGNATURE.gameSuccess) {
      this.end();
    }
  }

  end() {}

  askRetry() {}

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
