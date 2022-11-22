const InputView = require('./Views/InputView.js');

class GameManager {
  askBridgeSize(callback) {
    InputView.readBridgeSize(callback);
  }

  askWhereToGo(callback) {
    InputView.readMoving(callback);
  }

  askRetry(callback) {
    InputView.readGameCommand(callback);
  }
}

module.exports = GameManager;
