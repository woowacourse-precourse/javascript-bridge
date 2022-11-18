const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.start();
    this.initialize();
  }

  initialize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(bridgeSize) {
    this.bridgeGame.setBridge(bridgeSize);
    this.go();
  }

  go() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  moveUser(direction) {
    this.bridgeGame.move(direction);
    OutputView.printMap(this.bridgeGame)
    this.bridgeGame.isCorrect() ? this.go() : this.isRetry()
  }

  isRetry() {
    InputView.readGameCommand(this.makeBridge.bind(this));
  }

}

const app = new App();
app.play();

module.exports = App;
