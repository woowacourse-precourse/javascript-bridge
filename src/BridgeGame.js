/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 const BridgeMaker = require("./BridgeMaker");
 const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
 const InputView = require("./InputView");
 const OutputView = require("./OutputView");

class BridgeGame {

  #bridge;

  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    console.log(this.#bridge);

    InputView.readMoving(this.startMove.bind(this));
  }

  startMove(inputMoving) {
    let moveCount = 0;
    this.move(inputMoving, moveCount);
  }

  /**
 * 사용자가 칸을 이동할 때 사용하는 메서드
 * <p>
 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
 */
  move(inputMoving, moveCount) {
    console.log(inputMoving, moveCount);
    if (this.#bridge[moveCount] === inputMoving) {
      console.log('O');
      return 'O';
    }

    console.log('X');
    return "X";
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
