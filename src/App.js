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
    const tryCount = this.#bridgeGame.getTryCount();
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

  setGameLog(userInput) {
    BridgeGame.checkIncludeUandD(userInput);
    this.#bridgeGame.move();
    this.#bridgeGame.setGameLog(userInput);
  }

  getBridgeLength() {
    return this.#bridgeGame.getBridge().length;
  }

  isGameOver() {
    const result = this.#bridgeGame.getCurrentBridgeReuslt();
    const FAILURE = 'X';
    const [GAMR_OVER, NO_GAME_OVER] = [true, false];
    if (result === FAILURE) {
      return GAMR_OVER;
    }

    return NO_GAME_OVER;
  }
}

module.exports = App;
