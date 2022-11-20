const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const MESSAGE = require('./utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #history = [];
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
    Console.readLine(MESSAGE.WHERETOMOVE, (direction) => {
      InputView.readMoving(direction);
      this.#checkMoveCorrectly(direction, bridge);
    });
  }

  #checkMoveCorrectly(direction, bridge) {
    if (bridge[this.#history.length] === direction)
      this.#moveCorretly(direction, bridge);
    else this.#moveInCorrectly();
  }

  #moveCorretly(direction, bridge) {
    this.#history.push(direction);
    console.log(this.#history);
  }

  #moveInCorrectly() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
