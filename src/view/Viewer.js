const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Viewer {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
  }

  readMoving(callback) {
    this.inputView.readMoving(callback);
  }

  readBridgeSize(callback) {
    this.inputView.readBridgeSize(callback);
  }

  readGameCommand(callback) {
    this.inputView.readGameCommand(callback);
  }

  printMap(bridge) {
    this.outputView.printMap(bridge);
  }

  printResult(result) {
    this.outputView.printResult(result);
  }

  printError(error) {
    this.outputView.printError(error);
  }
}

module.exports = Viewer;
