const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { print } = require('./Utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #size;
  #bridge;
  #tryCount;
  #userInputArray;
  #gameStatus;

  initGame(size) {
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    this.#userInputArray = [];
    this.#tryCount = 1;
    this.#gameStatus = false;
    this.topText = '';
    this.bottomText = '';
    console.log(this.#bridge);
  }

  showResult() {
    return `[${this.topText}]\n[${this.bottomText}]\n`;
  }

  buildResult(flag) {
    const len = this.#userInputArray.length;
    const value = this.#userInputArray[len - 1];
    const ox = flag ? ' O ' : ' X ';

    if (value == 'U') {
      this.topText =
        len == 1
          ? this.buildTextResult(this.topText, `${ox}`)
          : this.buildTextResult(this.topText, `|${ox}`);
      this.bottomText =
        len == 1
          ? this.buildTextResult(this.bottomText, '   ')
          : this.buildTextResult(this.bottomText, '|   ');
    } else {
      this.topText =
        len == 1
          ? this.buildTextResult(this.topText, '   ')
          : this.buildTextResult(this.topText, '|   ');
      this.bottomText =
        len == 1
          ? this.buildTextResult(this.bottomText, `${ox}`)
          : this.buildTextResult(this.bottomText, `|${ox}`);
    }
  }

  buildTextResult(totalText, text) {
    return (totalText += text);
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

  isFinish() {
    if (this.#userInputArray.length == this.#size) this.#gameStatus = true;
    return this.#gameStatus;
  }

  finishGame() {
    print(
      `게임 성공 여부: ${this.#gameStatus ? '성공' : '실패'}\n 총 시도한 횟수: ${this.#tryCount}`
    );
  }
}

module.exports = BridgeGame;
