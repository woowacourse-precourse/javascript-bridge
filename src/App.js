const { makeBridge } = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const { bridgeSizeInputCheck, movingInputCheck, gameCommandInputCheck } = require('./ErrorChecker');

class App {
  #bridgeGame;

  play() {
    OutputView.printStartMessage();
    this.start();
  }

  start() {
    InputView.readBridgeSize((size) => {
      this.errorHandling(() => {
        bridgeSizeInputCheck(size);
        const bridges = makeBridge(Number(size), generate);
        this.#bridgeGame = new BridgeGame(bridges);
        this.select();
      }, this.start.bind(this));
    });
  }

  select() {
    InputView.readMoving((selection) => {
      this.errorHandling(() => {
        movingInputCheck(selection);
        const crossable = this.#bridgeGame.move(selection);
        OutputView.printMap(this.#bridgeGame.getPaths());
        this.control(crossable);
      }, this.select.bind(this));
    });
  }

  control(crossable) {
    if (crossable) {
      if (this.#bridgeGame.isEnd()) {
        this.end(true);
        return;
      }
      this.select();
      return;
    }
    this.fail();
  }

  fail() {
    InputView.readGameCommand((command) => {
      this.errorHandling(() => {
        gameCommandInputCheck(command);
        if (this.#bridgeGame.retry(command)) {
          this.select();
          return;
        }
        this.end(false);
      }, this.fail.bind(this));
    });
  }

  end(isSuccess) {
    OutputView.printResult(isSuccess, this.#bridgeGame.getTrials(), this.#bridgeGame.getPaths());
    Console.close();
  }

  errorHandling(execution, errorCallback) {
    try {
      execution();
    } catch (e) {
      Console.print(e.message);
      errorCallback();
    }
  }
}

module.exports = App;
