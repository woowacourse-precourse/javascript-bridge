const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printStartMessage } = require("./OutputView");
const { validateBridgeNumber } = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.inputView = Object.create(InputView);
    this.outputView = Object.create(OutputView);
    this.game = null;
  }

  play() {
    printStartMessage();
    this.inputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(length) {
    try {
      validateBridgeNumber(length);
      this.game = new BridgeGame(this.inputView, this.outputView, +length);
      this.game.move();
    } catch (error) {
      Console.print(error);
      this.inputView.readBridgeSize(this.handleBridgeSize.bind(this));
    }
  }
}

// const app = new App();
// app.play();
module.exports = App;
