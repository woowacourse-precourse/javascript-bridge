/* eslint-disable class-methods-use-this */
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const { printMap, printResult } = require('./OutputView');
const { KEY } = require('./Constant');

class App {
  #bridgeGame;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = BridgeMaker.makeBridge(size, generate);
    this.#bridgeGame = new BridgeGame(bridge);
    this.startGame(bridge);
  }

  startGame() {
    InputView.readMoving(this.onReadMoving.bind(this));
  }

  onReadMoving(moving) {
    validateReadMoving(moving);
    const isCorrect = this.#bridgeGame.move(moving);
    printMap(this.#bridgeGame.getMoveHistory(), isCorrect);
    if (!isCorrect) InputView.readGameCommand(this.onReadGameCommand.bind(this));
    if (this.#bridgeGame.isFinished()) if (isCorrect) return printResult(this.#bridgeGame.getTryNum(), this.#bridgeGame.getMoveHistory(), isCorrect);
    if (isCorrect) return InputView.readMoving(this.onReadMoving.bind(this));
  }

  onReadGameCommand(command) {
    validateReadGameCommand(command);
    if (command === KEY.RESTART) {
      this.#bridgeGame.retry(this);
    } else if (command === KEY.QUIT) {
      printResult(this.#bridgeGame.getTryNum(), this.#bridgeGame.getMoveHistory(), false);
    }
  }
}

module.exports = App;
