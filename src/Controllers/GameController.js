const BridgeGame = require('../Models/BridgeGame');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    this.outputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    this.inputView.readBridgeSize((userInput) => {
      const size = this.inputView.getBridegeSize(userInput);
      this.buildBridge(size);
    });
  }

  buildBridge(size) {
    this.bridgeGame.createBridge(size);
    this.selectMoving();
  }

  selectMoving() {
    this.inputView.readMoving((userInput) => {
      const select = this.inputView.getUserMoving(userInput);
      this.bridgeGame.move(select);
      const alive = this.bridgeGame.checkAlive();
      if (alive) return this.selectMoving();
      this.askRetry();
    });
  }

  askRetry() {}
}

module.exports = GameController;
