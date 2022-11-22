const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
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
      const bridge = makeBridge(size, generate);

      this.game.setBridge(bridge);
    });
  }
}

module.exports = GameController;
