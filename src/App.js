const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { COMMAND } = require("./constants/game");

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
    const answerDirectionsBridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.bridgeGame.setAnswerDirections(answerDirectionsBridge);

    this.inputMovingCommand();
  }

  inputMovingCommand() {
    InputView.readMoving(this.moveBirdge.bind(this));
  }

  moveBirdge(movingCommand) {
    this.bridgeGame.move(movingCommand);
    OutputView.printMap(this.bridgeGame.getCorssedBridgeMap());

    this.controlBridgeMoveResult();
  }

  controlBridgeMoveResult() {
    if (!this.bridgeGame.isAnswerMovingCommand()) {
      return this.inputGameCommand();
    }
    if (this.bridgeGame.isGameSuccess()) {
      return OutputView.printResult(this.sendPrintResult());
    }

    this.inputMovingCommand();
  }

  inputGameCommand() {
    InputView.readGameCommand(this.retryQuit.bind(this));
  }

  retryQuit(gameCommand) {
    if (gameCommand === COMMAND.GAME.QUIT) {
      return OutputView.printResult(this.sendPrintResult());
    }

    this.bridgeGame.retry();
    this.inputMovingCommand();
  }

  sendPrintResult() {
    const currentBridgeMap = this.bridgeGame.getCorssedBridgeMap();
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
