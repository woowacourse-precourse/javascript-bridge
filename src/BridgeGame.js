const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #choice;
  #count;

  constructor() {
    this.#bridge = [];
    this.#choice = [];
    this.#count = 0;
  }

  #checkChoice() {
    const length = this.#choice.length;
    const lastBridge = this.#bridge[length - 1];
    const lastChoice = this.#choice[length - 1];

    return lastBridge === lastChoice;
  }

  makeBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(choice) {
    this.#choice.push(choice);
    return this.#checkChoice();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#choice = [];
    this.#count += 1;
  }

  getBridgeLength() {
    return this.#bridge.length;
  }

  getChoiceLength() {
    return this.#choice.length;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
