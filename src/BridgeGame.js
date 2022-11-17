/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  #bridgeSize;
  #bridgeStyle;

  constructor() {
    this.setBridge();
  }

  setBridge() {
    this.#bridgeSize = InputView.readBridgeSize();
    this.#bridgeStyle = BridgeMaker(
      this.#bridgeSize,
      BridgeRandomNumberGenerator
    );
  }

  gameStart() {
    for (let round = 0; round < this.#bridgeSize; round++) {
      this.move();
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const moving = InputView.readMoving();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
