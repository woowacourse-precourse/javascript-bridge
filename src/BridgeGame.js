const InputView = require('./InputView');
const BridgeMap = require('./BridgeMap');
const OutputView = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userMove;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#userMove = [];
    console.log(bridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(step) {
    this.#userMove.push(step);
  }

  getUserCommand() {
    // TODO: get user command (retry or quit)
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  checkResult() {
    const currentBridge = this.#bridge.slice(0, this.#userMove.length);
    // FIXME: change toString into different logic
    if (currentBridge.toString() === this.#userMove.toString()) {
      this.getUserMove();
    } else {
      this.getUserCommand();
    }
  }

  getUserMove() {
    InputView.readMoving((step) => {
      this.move(step);
      BridgeMap.generate(this.#bridge, this.#userMove);
      OutputView.printMap();
      this.checkResult();
    });
  }

  start() {
    this.getUserMove();
  }
}

module.exports = BridgeGame;
