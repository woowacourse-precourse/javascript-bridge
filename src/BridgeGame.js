const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { print } = require('./Utils');

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
  }

  showResult() {
    return `[${this.topText}]\n[${this.bottomText}]\n`;
  }

  buildResult(correct) {
    const len = this.#userInputArray.length;
    const value = this.#userInputArray[len - 1];
    const ox = correct ? ' O ' : ' X ';

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

  isCorrect(input) {
    const currentIndex = this.#userInputArray.length;
    return this.#bridge[currentIndex] == input;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, correct) {
    this.#userInputArray.push(input);
    this.buildResult(correct);
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
      this.topText = '';
      this.bottomText = '';
      return true;
    }

    return false;
  }

  isFinish() {
    return (this.#gameStatus = this.#userInputArray.length == this.#size);
  }

  finishGame() {
    print(
      `게임 성공 여부: ${this.#gameStatus ? '성공' : '실패'}\n 총 시도한 횟수: ${this.#tryCount}`
    );
  }
}

module.exports = BridgeGame;
