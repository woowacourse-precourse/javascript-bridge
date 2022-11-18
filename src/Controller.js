const BridgeGame = require('./BridgeGame');
const { readBridgeSize, readGameCommand, readMoving } = require('./InputView');
const { printNewLine, printStart, printMap, printResult } = require('./OutputView');

class Controller {
  #BridgeGame;

  run() {
    printStart();
    printNewLine();
    readBridgeSize((size) => {
      this.#BridgeGame = new BridgeGame(size);
      this.movingPhase();
    });
  }

  movingPhase() {
    readMoving((square) => {
      const valid = this.#BridgeGame.move(square).isValidateSquare();
      printMap(this.#BridgeGame.makeMiddleBridge());
      if (this.#BridgeGame.isEnd()) return this.resultPhase();
      return valid ? this.movingPhase() : this.retryPhase();
    });
  }

  retryPhase() {}

  resultPhase() {}
}

module.exports = Controller;
