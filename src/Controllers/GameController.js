const { Console } = require('@woowacourse/mission-utils');
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
    Console.close();
  }
}

module.exports = GameController;
