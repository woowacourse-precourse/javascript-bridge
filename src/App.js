const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validation = require('./Validation');

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
      try {
        Validation.checkBridgeSize(size);
      } catch (error) {
        OutputView.printErrorMessage(error);

        return this.requestBridgeSize();
      }

      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestDirection();
    });
  }

  requestDirection() {
    InputView.readMoving((direction) => {
      try {
        Validation.checkDirection(direction);
      } catch (error) {
        OutputView.printErrorMessage(error);

        return this.requestDirection();
      }

      this.bridgeGame.move(direction);
      OutputView.printMap(this.bridgeGame.getBridgeCrossingResult());

      if (this.bridgeGame.isFail()) return this.requestRestartOrQuit();

      if (this.bridgeGame.isLast()) return this.quit();

      return this.requestDirection();
    });
  }

  requestRestartOrQuit() {
    InputView.readGameCommand((commandOption) => {
      try {
        Validation.checkCommandOption(commandOption);
      } catch (error) {
        OutputView.printErrorMessage(error);

        return this.requestRestartOrQuit();
      }

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
