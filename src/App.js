const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { COMMAND } = require("./utils/constans");

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
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.playerMove.bind(this));
  }

  playerMove(movingCommand) {
    this.bridgeGame.move(movingCommand);
    OutputView.printMap(this.bridgeGame.getCurrentBridgeMap());

    if (!this.bridgeGame.isAnswerMovingChoice()) {
      this.inputRetryCommand();
      return;
    }
    if (this.bridgeGame.isGameSuccess()) {
      OutputView.printResult(this.sendPrintResult());
      return;
    }
    this.inputMoving();
  }

  inputRetryCommand() {
    InputView.readGameCommand(this.playerChoiceRetry.bind(this));
  }

  playerChoiceRetry(gameCommand) {
    if (gameCommand === COMMAND.GAME.QUIT) {
      OutputView.printResult(this.sendPrintResult());
      return;
    }
    this.bridgeGame.retry();
    this.inputMoving();
  }

  sendPrintResult() {
    const currentBridgeMap = this.bridgeGame.getCurrentBridgeMap();
    const totalTryCount = this.bridgeGame.getTotalTryCount();
    const isGameSuccess = this.bridgeGame.isGameSuccess();
    return {
      currentBridgeMap,
      totalTryCount,
      isGameSuccess,
    };
  }
}

const app = new App();
app.play();

module.exports = App;
