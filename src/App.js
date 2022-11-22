const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");


class App {

  constructor() {
    this.bridgeGame = new BridgeGame;
  }

  play() {
    OutputView.printStart()
    InputView.readBridgeSize();
    InputView.readMoving();
    InputView.readMoving();
    InputView.readMoving();
  };
}

const app = new App;
app.play();

module.exports = App;
