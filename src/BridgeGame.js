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
      this.topText = this.buildCorrectText(len, this.topText, ox);
      this.bottomText = this.buildEmptyText(len, this.bottomText);
    } else {
      this.topText = this.buildEmptyText(len, this.topText);
      this.bottomText = this.buildCorrectText(len, this.bottomText, ox);
    }
  }

  buildCorrectText(len, text, ox) {
    return len == 1 ? this.addText(text, `${ox}`) : this.addText(text, `|${ox}`);
  }

  buildEmptyText(len, text) {
    return len == 1 ? this.addText(text, '   ') : this.addText(text, '|   ');
  }

  addText(totalText, text) {
    return (totalText += text);
  }

  isCorrect(input) {
    const currentIndex = this.#userInputArray.length;
    return this.#bridge[currentIndex] == input;
  }

  move(input, correct) {
    this.#userInputArray.push(input);
    this.buildResult(correct);
  }

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
