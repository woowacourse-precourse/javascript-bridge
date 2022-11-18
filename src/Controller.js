const BridgeGame = require('./BridgeGame');
const { readBridgeSize, readGameCommand, readMoving } = require('./InputView');
const { printNewLine, printStart, printMap, printResult } = require('./OutputView');
const { checkBridgeSize, checkRetryInput, checkRoundInput } = require('./Validation');

class Controller {
  #BridgeGame;

  constructor() {
    printStart();
    printNewLine();
  }

  run() {
    readBridgeSize((size) => {
      if (checkBridgeSize(size)) {
        this.run();
        return;
      }
      this.#BridgeGame = new BridgeGame(size);
      printNewLine();
      this.movingPhase();
    });
  }

  movingPhase() {
    readMoving((square) => {
      if (checkRoundInput(square)) {
        this.movingPhase();
        return;
      }
      const valid = this.#BridgeGame.move(square).isValidateSquare();
      printMap(this.#BridgeGame.makeMiddleBridge());
      if (this.#BridgeGame.isEnd()) {
        this.resultPhase();
        return;
      }
      if (valid) {
        this.movingPhase();
        return;
      }
      this.retryPhase();
    });
  }

  retryPhase() {
    readGameCommand((input) => {
      if (checkRetryInput(input)) {
        this.retryPhase();
        return;
      }
      if (this.#BridgeGame.retry(input)) this.movingPhase();
      else this.resultPhase();
    });
  }

  resultPhase() {
    printResult(this.#BridgeGame.getResult());
  }
}

module.exports = Controller;
