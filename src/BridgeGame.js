const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const MESSAGE = require('./utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeHistory = [];
  #attempts;

  constructor() {
    this.#attempts = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge) {
    Console.print(bridge);
    Console.readLine(MESSAGE.WHERETOMOVE, (direction) => {
      InputView.readMoving(direction);
      this.#checkMoveCorrectly(direction, bridge);
    });
  }

  #checkMoveCorrectly(direction, bridge) {
    if (bridge[this.#bridgeHistory.length] === direction)
      this.#moveCorretly(direction, bridge);
    else this.#moveIncorrectly();
  }

  #moveCorretly(direction, bridge) {
    this.#bridgeHistory.push(direction);
    OutputView.printMap(this.#bridgeHistory);
    // if (this.#bridgeHistory.length === bridge.length) this.#gameSet('실패');
    this.move(bridge);
  }

  #moveIncorrectly() {}

  #gameSet() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
