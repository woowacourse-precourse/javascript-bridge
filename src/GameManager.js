const Validation = require("./Validation");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const { INPUT_QUESTION } = require("./utils/Constants");



class GameManager {

  inputBridgeSize(callback) {
    InputView.readBridgeSize(INPUT_QUESTION.bridgeLen, (bridgeSize) => {
      Validation.checkBridgeLength(bridgeSize);
      const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      callback(bridge);
    });
  }

  inputMovingSpace(callback) {
    InputView.readMoving(INPUT_QUESTION.move, (space) => {
      Validation.checkSpace(space);
      callback(space);
    })
  }

  inputRetry(callback) {
    InputView.readGameCommand(INPUT_QUESTION.retry, (input) => {
      Validation.checkRetryCommand(input);
      callback(input);
    })
  }

  printStart() {
    OutputView.printStartMessage();
  }

  printRow(upRow, downRow) {
    OutputView.printMap(upRow, downRow);
  }

  printResult(upRow, downRow) {
    OutputView.printResult(upRow, downRow);
  }

  printInfo(count, result) {
    OutputView.printInfo(count, result);
  }

  printBlankLine() {
    OutputView.printBlankLine();
  }
}

module.exports = GameManager;