const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeValidator = require("./utils/BridgeValidator");
const DirectionValidator = require("./utils/DirectionValidator");
const RetryValidator = require("./utils/RetryValidator");

const { BRIDGE_LENGTH } = require("./constants/gameState");
class BridgeGameController {
  start(game) {
    OutputView.printStart();
    InputView.game = game;
    InputView.readBridgeSize();
  }

  outputError(e) {
    OutputView.printError(e);
  }

  inputBridgeSize() {
    InputView.readBridgeSize();
  }

  inputDirection() {
    InputView.readMoving();
  }

  inputRetry() {
    InputView.readGameCommand();
  }

  outputMap(result) {
    OutputView.printMap(result);
  }

  validateBridgeLength(size) {
    try {
      BridgeValidator.isInRange(size, BRIDGE_LENGTH.START, BRIDGE_LENGTH.END);
      BridgeValidator.isNumber(size);
      return true;
    } catch (e) {
      this.outputError(e);
      this.inputBridgeSize();
    }
  }

  validateDirection(direction) {
    try {
      DirectionValidator.validateDirection(direction);
      return true;
    } catch (e) {
      this.outputError(e);
      this.inputDirection();
    }
  }

  validateRetry(retry) {
    try {
      RetryValidator.validateRetry(retry);
      return true;
    } catch (e) {
      this.outputError(e);
      this.inputRetry();
    }
  }
}

module.exports = BridgeGameController;
