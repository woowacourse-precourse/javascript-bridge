// @ts-check

const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  /** @type {BridgeGame} */
  #bridgeGame;

  #result;

  play() {
    OutputView.printStart();
    this.gameStart();
  }

  gameStart() {
    InputView.readBridgeSize((bridgeSize) => {
      this.#bridgeGame = new BridgeGame(Number(bridgeSize), 2);
      this.movePlayer();
    });
  }

  movePlayer() {
    InputView.readMoving((moving) => {
      this.#bridgeGame.move();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
