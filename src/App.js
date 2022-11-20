const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validation = require('./Validation');
const { throwException } = require('./ErrorHandler');

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    OutputView.printStartMessage();

    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      const { errorMsg } = Validation.checkBridgeSize(size);
      if (errorMsg)
        return throwException(errorMsg, () => this.requestBridgeSize());

      this.createBridgeGame(size);

      this.requestDirection();
    });
  }

  createBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(Number(size), generate);

    this.bridgeGame = new BridgeGame(bridge);
  }

  requestDirection() {
    InputView.readMoving((direction) => {
      const { errorMsg } = Validation.checkDirection(direction);
      if (errorMsg)
        return throwException(errorMsg, () => this.requestDirection());

      this.bridgeGame.move(direction);
      OutputView.printMap(this.bridgeGame.getBridgeCrossingResult());

      this.actionAboutBridgeGame();
    });
  }

  actionAboutBridgeGame() {
    if (this.bridgeGame.isFail()) return this.requestRestartOrQuit();

    if (this.bridgeGame.isLast()) return this.quit();

    return this.requestDirection();
  }

  requestRestartOrQuit() {
    InputView.readGameCommand((commandOption) => {
      const { errorMsg } = Validation.checkCommandOption(commandOption);
      if (errorMsg)
        return throwException(errorMsg, () => this.requestRestartOrQuit());

      if (commandOption === 'R') return this.restart();

      return this.quit();
    });
  }

  restart() {
    this.bridgeGame.retry();
    this.requestDirection();
  }

  quit() {
    OutputView.printEndMessage(this.bridgeGame.isFail());
    OutputView.printMap(this.bridgeGame.getBridgeCrossingResult());
    OutputView.printResult(this.bridgeGame.getResult());
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
