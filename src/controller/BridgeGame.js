const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #moving;

  #size;

  #count;

  constructor() {
    this.#bridge = [];
    this.#moving = {
      result: true,
      state: {
        Up: [],
        Down: [],
      },
      position: 0,
    };
    this.#size = 0;
    this.#count = 1;
  }

  make(size) {
    this.#size = Number(size);
    this.#bridge = makeBridge(size, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (direction === 'U') {
      return this.moveUp(direction);
    }
    if (direction === 'D') {
      return this.moveDown(direction);
    }
  }

  moveUp(direction) {
    if (this.checkSpace(direction)) {
      this.setStateUpX();
      return this.#moving;
    }
    this.setStateUpO();
    return this.#moving;
  }

  moveDown(direction) {
    if (this.checkSpace(direction)) {
      this.setStateDownX();
      return this.#moving;
    }
    this.setStateDownO();
    return this.#moving;
  }

  checkSpace(direction) {
    return this.#bridge[this.#moving.position] !== direction;
  }

  setStateUpX() {
    this.#moving.state.Up.push(' X ');
    this.#moving.state.Down.push('   ');
    this.#moving.result = false;
  }

  setStateUpO() {
    this.#moving.state.Up.push(' O ');
    this.#moving.state.Down.push('   ');
    this.#moving.position += 1;
  }

  setStateDownX() {
    this.#moving.state.Down.push(' X ');
    this.#moving.state.Up.push('   ');
    this.#moving.result = false;
  }

  setStateDownO() {
    this.#moving.state.Down.push(' O ');
    this.#moving.state.Up.push('   ');
    this.#moving.position += 1;
  }

  getResult() {
    return this.#moving.result;
  }

  getState() {
    return this.#moving.state;
  }

  getPosition() {
    return this.#moving.position;
  }

  getSize() {
    return this.#size;
  }

  getCount() {
    return this.#count;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.resetMoving();
    this.#count += 1;
  }

  resetMoving() {
    this.#moving = {
      result: true,
      state: {
        Up: [],
        Down: [],
      },
      position: 0,
    };
  }
}

module.exports = BridgeGame;
