const InputView = require('./Views/InputView.js');

class GameManager {
  constructor() {}

  askBridgeSize(callback) {
    InputView.readBridgeSize(callback);
    return;
  }

  askWhereToGo(callback) {
    return InputView.readMoving(callback);
  }

  askRetry(callback) {
    InputView.readGameCommand(callback);
  }
}

module.exports = GameManager;
