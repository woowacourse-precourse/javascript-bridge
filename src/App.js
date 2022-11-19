const BridgeGame = require('./BridgeGame');
const InputVaildation = require('./InputValidation');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStartMsg();
    this.requestBridgeLength();
  }

  requestBridgeLength() {
    InputView.readBridgeSize(this.startBridgeGame.bind(this));
  }

  startBridgeGame(userInputOfBridegeLength) {
    try {
      InputVaildation.ofBridgeLength(userInputOfBridegeLength);
      this.bridgeGame.generateOfBridgeGamePassword(userInputOfBridegeLength);
      this.requestMovingInput();
    } catch {
      OutputView.printWrongInputOfBridgeLength();
      this.requestBridgeLength();
    }
  }

  requestMovingInput() {
    InputView.readMoving(this.userDecideGoToUpOrDown.bind(this));
    this.userDecideGoToUpOrDown();
  }

  userDecideGoToUpOrDown(userInputMoving) {
    this.bridgeGame.stackOfUserMovingInput(userInputMoving);
  }
}

const app = new App();
app.play();

module.exports = App;
