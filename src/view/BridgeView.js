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
  printGameStart() {
    this.outputView.printGameStart();
  }

  printMap(map) {
    this.outputView.printMap(map);
  }

  printResult() {
    this.outputView.printMap();
  }
};

module.exports = BridgeView;
