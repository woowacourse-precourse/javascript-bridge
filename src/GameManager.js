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

  printSpace(firstRow, secondRow) {
    OutputView.printMap(firstRow, secondRow);
  }

  printResult(firstRow, secondRow) {
    OutputView.printResult(firstRow, secondRow);
  }

  printInfo(count, result) {
    OutputView.printInfo(count, result);
  }
}

module.exports = GameManager;