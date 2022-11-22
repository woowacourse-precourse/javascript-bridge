const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Viewer {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
  }

  inputSandBoxing(callerFunction, callback) {
    return (input) => {
      try {
        callback(input);
      } catch (error) {
        this.printError(error);
        callerFunction(callback);
      }
    };
  }

  readBridgeSize(callback) {
    this.inputView.readBridgeSize(
      this.inputSandBoxing(
        this.readBridgeSize.bind(this),
        callback,
      ),
    );
  }

  readMoving(callback) {
    this.inputView.readMoving(
      this.inputSandBoxing(
        this.readMoving.bind(this),
        callback,
      ),
    );
  }

  readGameCommand(callback) {
    this.inputView.readGameCommand(
      this.inputSandBoxing(
        this.readGameCommand.bind(this),
        callback,
      ),
    );
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
