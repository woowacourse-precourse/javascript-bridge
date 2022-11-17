const BridgeGame = require('./BridgeGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #bridgeGame;

  play() {
    OutputView.printStart();
    this.inputBridgeSize();
  }

  makeGame(length) {
    this.#bridgeGame = new BridgeGame(Number(length));
  }

  inputBridgeSize() {
    InputView.readBridgeSize((length) => {
      this.makeGame(length);
      this.inputMoving();
    });
  }

  inputMoving() {
    InputView.readMoving((direction) => {
      if (this.#bridgeGame.move(direction)) {
        this.inputMoving();
      }
      this.inputRetry();
    });
  }

  inputRetry() {
    InputView.readGameCommand((command) => {
      if (command === 'R') {
        this.restart();
      } else if (command === 'Q') {
        console.log('종료');
      }
    });
  }

  restart() {
    this.#bridgeGame.retry();
    this.inputMoving();
  }
}

module.exports = App;
