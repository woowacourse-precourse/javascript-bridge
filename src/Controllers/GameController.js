const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const BridgeMaker = require('../BridgeMaker');
const { generateRandomNumber } = require('../utils/bridgeHandler');

class GameController {
  constructor() {
    this.outputView = OutputView;
    this.inputView = InputView;
    this.size = 0;
  }

  startGame() {
    this.outputView.printStart();
    this.selectBridgeSize();
  }

  selectBridgeSize() {
    this.inputView.readBridgeSize();
  }

  createBridge() {
    const myBridge = BridgeMaker(this.size, generateRandomNumber);
  }
}

module.exports = GameController;
