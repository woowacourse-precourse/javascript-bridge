const BridgeGame = require('../model/BridgeGame');
const { readBridgeSize, readGameCommand, readMoving } = require('../view/InputView');
const { printNewLine, printStart, printMap, printResult } = require('../view/OutputView');
const { isValidBridgeSize, isValidRetry, isValidRound } = require('../Validation');

class BridgeGameController {
  #BridgeGame;

  constructor() {
    printStart();
    printNewLine();
  }

  run() {
    readBridgeSize((input) => (isValidBridgeSize(input) ? this.create(input) : this.run()));
  }

  create(size) {
    this.#BridgeGame = new BridgeGame(size);
    printNewLine();
    this.checkRound();
  }

  checkRound() {
    readMoving((input) => (isValidRound(input) ? this.startRound(input) : this.checkRound()));
  }

  startRound(square) {
    const valid = this.#BridgeGame.move(square).isValidateSquare();
    printMap(this.#BridgeGame.makeMiddleBridge());
    if (this.#BridgeGame.isEnd()) {
      return this.result();
    }
    return valid ? this.checkRound() : this.checkRetry();
  }

  checkRetry() {
    readGameCommand((input) => (isValidRetry(input) ? this.retry(input) : this.checkRetry()));
  }

  retry(input) {
    return this.#BridgeGame.retry(input) ? this.checkRound() : this.result();
  }

  result() {
    printResult(this.#BridgeGame.getResult());
  }
}

module.exports = BridgeGameController;
