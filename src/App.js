const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./domain/BridgeGame');
const User = require('./model/User');
const Validator = require('./view/Validator');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.user = new User();
    this.validator = new Validator();
  }

  play() {
    OutputView.printStart();
    this.getBridgeSizeInput();
  }

  getBridgeSizeInput() {
    InputView.readBridgeSize(this.requestBridgeSize.bind(this));
  }

  requestBridgeSize(bridgeSize) {
    try {
      this.validator.checkBridgeSize(bridgeSize);
      // 예외 통과하면 다리 건설
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeSizeInput();
    }
  }

  getBridgeMovementDirection() {}
}

const app = new App();
app.play();

module.exports = App;
