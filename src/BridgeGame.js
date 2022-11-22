/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #userState;
  #countTry;
  #condition;

  constructor(size) {
    this.validateSizeRange(size);
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#userState = [];
    this.#countTry = 0;
  }

  validateSizeRange(size) {
    if (!(size >= 3 && size <= 20)) {
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }

  validateUnd(und) {
    if (!(und === 'D' || und === 'U')) {
      throw Error('[ERROR] 대문자 U , D 둘 중 하나만 입력해주세요.');
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    this.validateUnd(command);
    this.#userState.push(command);

    const lastIndex = this.#userState.length - 1;

    if (this.#bridge[lastIndex] === this.#userState[lastIndex]) {
      if (this.#bridge.length === this.#userState.length) {
        this.#condition = 0;
      } else {
        this.#condition = 1;
      }
    } else {
      this.#condition = 2;
      this.#countTry += 1;
    }
    return [this.#condition, this.#bridge, this.#userState, this.#countTry];
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#userState.pop();
  }
}

module.exports = BridgeGame;
