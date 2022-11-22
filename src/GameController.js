const InputView = require("./InputView");
const OutputView = require("./OutputView");

class GameController {
  constructor({ game }) {
    this.game = game;
  }

  play() {
    OutputView.printIntro();

    this.setUpBridge();
  }

  setUpBridge() {
    InputView.readBridgeSize((size) => {
      console.log(size);
    });
  }
}

module.exports = GameController;
