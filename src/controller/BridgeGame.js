const Bridge = require('../model/Bridge');
const { readBridgeSize, readMoving } = require('../view/InputView');
const { printGameStart } = require('../view/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;

  #bridge;

  async execute() {
    printGameStart();
    this.#bridgeSize = await readBridgeSize();
    this.#bridge = new Bridge(this.#bridgeSize);
    this.#bridge.print();
    console.log(await readMoving());
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
