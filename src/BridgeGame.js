const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { GAME_COMMAND } = require('./constants/Constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userInputArray;
  #tryCount;
  #gameStatus;

  initGame(size) {
    this.#bridge = BridgeMaker.makeBridge(size, generate);
    this.#tryCount = 1;
    this.#gameStatus = false;
    this.resetGame();
  }

  showResult() {
    return `[${this.topText}]\n[${this.bottomText}]\n`;
  }

  buildResult(correct) {
    const len = this.#userInputArray.length;
    const value = this.#userInputArray[len - 1];
    const ox = correct ? ' O ' : ' X ';

    if (value == GAME_COMMAND.UP) {
      this.topText = this.buildCorrectText(len, this.topText, ox);
      this.bottomText = this.buildEmptyText(len, this.bottomText);
      return;
    }

    this.topText = this.buildEmptyText(len, this.topText);
    this.bottomText = this.buildCorrectText(len, this.bottomText, ox);
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
    const currentIdx = this.#userInputArray.length;
    return this.#bridge[currentIdx] == input;
  }

  move(input, correct) {
    this.#userInputArray.push(input);
    this.buildResult(correct);
  }

  retry(input) {
    if (input == GAME_COMMAND.RETRY) {
      this.resetGame();
      this.#tryCount += 1;
      return true;
    }

    return false;
  }

  resetGame() {
    this.#userInputArray = [];
    this.topText = '';
    this.bottomText = '';
  }

  isFinish() {
    this.#gameStatus = this.#userInputArray.length == this.#bridge.length;
    return this.#gameStatus;
  }

  finishGame() {
    return `게임 성공 여부: ${this.#gameStatus ? '성공' : '실패'}\n총 시도한 횟수: ${
      this.#tryCount
    }`;
  }
}

module.exports = BridgeGame;
