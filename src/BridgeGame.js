const InputView = require("./InputView");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #BRIDGE = [];
  #CUR_IDX = -1;
  #MOVING = [];
  #COUNT = 1;

  constructor(bridge) {
    this.#BRIDGE = bridge;
  }

  initValue() {
    this.#MOVING = [];
    this.#CUR_IDX = -1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    this.#MOVING.push(moving);
    this.#CUR_IDX++;

    this.changeToMap();

    if (this.#BRIDGE.length === this.#MOVING.length)
      OutputView.printResult();

    return moving === this.#BRIDGE[this.#CUR_IDX] ? true : false;
  }

  changeToMap() {
    const UP = [];
    const DOWN = [];

    this.#MOVING.map((moving, idx) => {
      moving === 'U' ? UP.push(moving === this.#BRIDGE[idx] ? ' O ' : ' X ') : DOWN.push(moving === this.#BRIDGE[idx] ? ' O ' : ' X ');
      moving === 'U' ? DOWN.push('   ') : UP.push('   ');
    });

    OutputView.printMap(UP, DOWN);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#COUNT++;
    InputView.readMoving();
  }
}

module.exports = BridgeGame;
