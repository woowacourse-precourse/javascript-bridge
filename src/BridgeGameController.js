const { DIRECTION } = require("./constants/gameState");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

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

  outputMap(upArray, downArray) {
    OutputView.printMap(upArray.join(" | "), downArray.join(" | "));
  }
}

module.exports = BridgeGameController;
