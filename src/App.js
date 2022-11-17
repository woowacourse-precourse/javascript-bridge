const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(bridgeSize) {
    this.bridgeGame.setBridgeShape(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
    console.log(this.bridgeGame.getBridgeShape());
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.playerMove.bind(this));
  }

  playerMove(movingCommand) {
    this.bridgeGame.move(movingCommand);
    if (this.bridgeGame.isNextMove()) {
      OutputView.printMap(this.bridgeGame.getCurrentBridgeMap());
      this.inputMoving();
      return;
    }
    if (!this.bridgeGame.isAnswerMovingChoice()) {
      OutputView.printMap(this.bridgeGame.getCurrentBridgeMap());
      this.inputRetryCommand();
      return;
    }
    OutputView.printMap(this.bridgeGame.getCurrentBridgeMap());
    OutputView.printResult(this.bridgeGame.getCurrentBridgeMap());
  }

  inputRetryCommand() {
    InputView.readGameCommand();
  }
}

const app = new App();
app.play();

module.exports = App;
