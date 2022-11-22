const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printStartMessage } = require("./OutputView");
const { validateBridgeNumber, validateBridgeMove } = require("./Validation");

class App {
  constructor() {
    this.inputView = Object.create(InputView);
    this.outputView = Object.create(OutputView);
    this.game = null;
    this.gameCount = 0;
  }

  play() {
    printStartMessage();
    this.inputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(length) {
    validateBridgeNumber(length);
    this.game = new BridgeGame(this.inputView, this.outputView, +length);
    this.game.move();
  }
}

const app = new App();
app.play();
module.exports = App;
