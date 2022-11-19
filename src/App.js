const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStartMsg();
    InputView.readBridgeSize(this.startBridgeGame.bind(this));
  }

  startBridgeGame(userInputOfBridegeLength) {
    this.bridgeGame.generateOfBridgeGamePassword(userInputOfBridegeLength);
    InputView.readMoving(this.userDecideGoToUpOrDown.bind(this));
  }

  userDecideGoToUpOrDown(userInputMoving) {
    this.bridgeGame.stackOfUserMovingInput(userInputMoving);
  }

}

const app = new App();
app.play();

module.exports = App;
