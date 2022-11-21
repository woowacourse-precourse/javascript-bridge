const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  #bridgeGame;

  #input;

  #output;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.#input = InputView;
    this.#output = OutputView;
  }

  printStartMessage() {
    const message = OutputView.message.START;

    this.#output.print(message);
  }

  printFinalGameResult() {
    const gameReuslt = !this.isGameOver();
    const tryCount = this.getTryCount();
    const classifiedBridgeLog = this.#bridgeGame.getCurrentClassifiedBridgeLog();

    this.#output.finalGameResult(classifiedBridgeLog);
    this.#output.printResult(gameReuslt, tryCount);
  }

  printFinalGameResultAndClose() {
    this.printFinalGameResult();
    this.exit();
  }

  printMap() {
    const classifiedBridgeLog = this.#bridgeGame.getCurrentClassifiedBridgeLog();

    this.#output.printMap(classifiedBridgeLog);
  }

  generateBridge(size) {
    const newBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    this.#bridgeGame.setBridge(newBridge);

    return newBridge;
  }
}

module.exports = App;
