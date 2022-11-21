const InputView = require('./InputView');
const OutputView = require('./OutputView');

class ViewInterFace {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  readBridgeLength(initBridge) {
    this.#inputView.readBridgeLength(initBridge);
  }

  readMoving(move) {
    this.#inputView.readMoving(move);
  }

  readGameCommand(isRetry) {
    this.#inputView.readGameCommand(isRetry);
  }

  printStart() {
    this.#outputView.printStart();
  }

  printMap(partialBridgeMap, lastMoving) {
    this.#outputView.printMap(partialBridgeMap, lastMoving);
  }

  printResult(partialBridgeMap, result, totalMovingCount) {
    this.#outputView.printResult(partialBridgeMap, result, totalMovingCount);
  }

  printError(errorMessage) {
    this.#outputView.printError(errorMessage);
  }
}

module.exports = ViewInterFace;
