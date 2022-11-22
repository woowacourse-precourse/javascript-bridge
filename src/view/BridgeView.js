const GameView = require('./GameView');

const BridgeView = class extends GameView {
  constructor(inputView, outputView) {
    super();
    this.inputView = inputView;
    this.outputView = outputView;
  }

  // InputView method
  readBridgeSize(callback) {
    this.inputView.readBridgeSize(callback);
  }

  readMoving(callback) {
    this.inputView.readMoving(callback);
  }

  readGameCommand(callback) {
    this.inputView.readGameCommand(callback);
  }

  // OutputView method
  printErrorMessage(errorMessage) {
    this.outputView.printErrorMessage(errorMessage);
  }

  printGameStart() {
    this.outputView.printGameStart();
  }

  printMap(map) {
    this.outputView.printMap(map);
  }

  printResult(result) {
    this.outputView.printResult(result);
  }
};

module.exports = BridgeView;
