const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

const Bridge = require('./Bridge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #map = [];
  #attempts = 1;

  makeBridge(size) {
    this.#validateSize(size);

    const compartments = makeBridge(size, generate);
    this.#bridge = new Bridge(compartments);
  }

  #validateSize(size) {
    if (this.#isNumber(size)) {
      return;
    }

    throw new Error('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(round, direction) {
    this.#validateDirection(direction);

    const map = this.#map;
    const movingState = this.#bridge.isMovable(round, direction);
    map.push([direction, movingState]);

    return { map, movingState };
  }

  #validateDirection(direction) {
    if (direction === 'U' || direction === 'D') {
      return;
    }

    throw new Error(
      '[ERROR] 이동할 칸은 위(U), 아래(D) 아래 중에 입력할 수 있습니다.',
    );
  }

  isLastRound(round) {
    if (!this.#bridge) {
      return false;
    }

    return round >= this.#bridge.size();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    this.#validateCommand(command);

    if (command === 'Q') {
      return false;
    }

    this.#reset();
    this.#attempts += 1;

    return true;
  }

  #validateCommand(command) {
    if (command === 'R' || command === 'Q') {
      return;
    }

    throw new Error(
      '[ERROR] 게임을 다시 시도 하려면 R, 종료하려면 Q를 대문자로 입력해주세요.',
    );
  }

  #reset() {
    this.#map = [];
  }

  getGameResult() {
    const isSuccess = this.#bridge.size() === this.#map.length;

    return { map: this.#map, attempts: this.#attempts, isSuccess };
  }
}

module.exports = BridgeGame;
