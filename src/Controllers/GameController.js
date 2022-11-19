const BridgeGame = require('../Models/BridgeGame');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');

class GameController {
  #size;

  constructor() {
    this.outputView = OutputView;
    this.inputView = InputView;
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    this.outputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    this.inputView.readBridgeSize((userInput) => {
      this.#size = this.inputView.getBridegeSize(userInput);
      this.buildBridge();
    });
  }

  buildBridge() {
    this.bridgeGame.createBridge(this.size);
  }
}

module.exports = GameController;
