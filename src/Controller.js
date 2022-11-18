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
    });
  }
}

module.exports = Controller;
