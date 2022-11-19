const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const movingMap = {
  U: 0,
  D: 1
};

class BridgeGame {
  #size;
  #bridge;
  #tryCount;
  #userInputArray;
  #result;

  constructor() {
    this.#tryCount = 1;
    this.#result = '';
    this.top = '';
    this.bottom = '';
  }

  buildResult() {
    const len = this.#userInputArray.length;
    const value = this.#userInputArray[len - 1];

    if (value == 'U') {
      this.top =
        len == 1 ? this.buildTextResult(this.top, ' O ') : this.buildTextResult(this.top, '| O ');
      this.bottom =
        len == 1
          ? this.buildTextResult(this.bottom, '   ')
          : this.buildTextResult(this.bottom, '|   ');
    } else {
      this.top =
        len == 1 ? this.buildTextResult(this.top, '   ') : this.buildTextResult(this.top, '|   ');
      this.bottom =
        len == 1
          ? this.buildTextResult(this.bottom, ' O ')
          : this.buildTextResult(this.bottom, '| O ');
    }

    return `[${this.top}]\n[${this.bottom}]\n`;
  }

  buildTextResult(totalText, text) {
    return (totalText += text);
  }

  setGame(size) {
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    this.#userInputArray = [];
    console.log(this.#bridge);
  }

  isMove(input) {
    const currentIndex = this.#userInputArray.length;
    console.log(currentIndex);
    return this.#bridge[currentIndex] == input;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    if (this.isMove(input)) {
      this.#userInputArray.push(input);
      console.log(this.#userInputArray.length == this.#size);
      return !(this.#userInputArray.length == this.#size);
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#userInputArray = [];
  }
}

module.exports = BridgeGame;
