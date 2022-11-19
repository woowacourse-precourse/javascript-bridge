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

  showResult() {
    return `[${this.top}]\n[${this.bottom}]\n`;
  }

  buildResult(flag) {
    const len = this.#userInputArray.length;
    const value = this.#userInputArray[len - 1];
    const ox = flag ? ' O ' : ' X ';

    if (value == 'U') {
      this.top =
        len == 1
          ? this.buildTextResult(this.top, `${ox}`)
          : this.buildTextResult(this.top, `|${ox}`);
      this.bottom =
        len == 1
          ? this.buildTextResult(this.bottom, '   ')
          : this.buildTextResult(this.bottom, '|   ');
    } else {
      this.top =
        len == 1 ? this.buildTextResult(this.top, '   ') : this.buildTextResult(this.top, '|   ');
      this.bottom =
        len == 1
          ? this.buildTextResult(this.bottom, `${ox}`)
          : this.buildTextResult(this.bottom, `|${ox}`);
    }
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
    return this.#bridge[currentIndex] == input;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const flag = this.isMove(input);
    this.#userInputArray.push(input);
    this.buildResult(flag);
    if (flag) {
      return !(this.#userInputArray.length == this.#size);
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input == 'R') {
      this.#tryCount += 1;
      this.#userInputArray = [];
      return true;
    }

    return false;
  }
}

module.exports = BridgeGame;
