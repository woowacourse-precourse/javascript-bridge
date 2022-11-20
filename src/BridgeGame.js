const { BRIDGE } = require("./utils/constants");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #array = Array.from({ length: 2 }, () => []);
  #rightAnswer;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, input) {
    switch (input) {
      case BRIDGE.UP:
        this.moveUpSide(bridge);
        break;
      case BRIDGE.DOWN:
        this.moveDownSide(bridge);
        break;
    }
    return [this.#array[0], this.#array[1], this.#rightAnswer];
  }

  moveUpSide(bridge) {
    bridge[this.#array[0].length] === BRIDGE.UP
      ? this.moveRightUp()
      : this.moveWrongUp();
  }

  moveDownSide(bridge) {
    bridge[this.#array[0].length] === BRIDGE.DOWN
      ? this.moveRightDown()
      : this.moveWrongDown();
  }

  moveRightUp() {
    this.#array[0].push(BRIDGE.MOVABLE);
    this.#array[1].push(BRIDGE.UNSELECTED);
    this.#rightAnswer = true;
  }

  moveWrongUp() {
    this.#array[0].push(BRIDGE.UNSELECTED);
    this.#array[1].push(BRIDGE.IMMOVABLE);
    this.#rightAnswer = false;
  }

  moveWrongDown() {
    this.#array[0].push(BRIDGE.IMMOVABLE);
    this.#array[1].push(BRIDGE.UNSELECTED);
    this.#rightAnswer = false;
  }

  moveRightDown() {
    this.#array[0].push(BRIDGE.UNSELECTED);
    this.#array[1].push(BRIDGE.MOVABLE);
    this.#rightAnswer = true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#array[0] = this.#array[0].slice(0, this.#array[0].length - 1);
    this.#array[1] = this.#array[1].slice(0, this.#array[1].length - 1);
    this.#rightAnswer = false;
    return [this.#array[0], this.#array[1], this.#rightAnswer];
  }
}

module.exports = BridgeGame;
