const InputView = require('./Views/InputView.js');

class GameManager {
  constructor() {}

  askBridgeSize(callback) {
    InputView.readBridgeSize(callback);
  }

  askWhereToGo(callback) {
    InputView.readMoving(callback);
  }

  validatePosition() {}

  askRetry(callback) {
    InputView.readGameCommand(callback);
  }
}

module.exports = GameManager;
