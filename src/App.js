const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const { Console } = require("@woowacourse/mission-utils");
const { INPUT_VALUE, STATES } = require("./constants/values");

class App {
  startGame() {
    InputView.readBridgeSize((size) => {
      size = Number(size);
      const bridgeGame = new BridgeGame(
        BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate),
        STATES.INITIAL_STEP,
        STATES.INITIAL_ROUND
      );
      this.progressGame(bridgeGame);
    });
  }

  progressGame(bridgeGame) {
    InputView.readMoving((answer) => {
      if (bridgeGame.checkInputIsCorrect(answer)) {
        this.moveUserBridge(answer, bridgeGame);
        return;
      }

      this.stopUserBridge(answer, bridgeGame);
      this.askRetry(bridgeGame);
    });
  }

  moveUserBridge(answer, bridgeGame) {
    bridgeGame.move(answer);
    OutputView.printMap(bridgeGame.getCurrentBridge());

    if (!this.checkIsGameSuccess(bridgeGame)) {
      bridgeGame.addStep();
      this.progressGame(bridgeGame);
    }
  }

  checkIsGameSuccess(bridgeGame) {
    if (bridgeGame.checkIsLastStep()) {
      OutputView.printResult(STATES.SUCCESS, bridgeGame);
      Console.close();
      return true;
    }

    return false;
  }

  stopUserBridge(answer, bridgeGame) {
    bridgeGame.stop(answer);
    OutputView.printMap(bridgeGame.getCurrentBridge());
  }

  askRetry(bridgeGame) {
    InputView.readGameCommand((answer) => {
      switch (answer) {
        case INPUT_VALUE.QUIT:
          OutputView.printResult(STATES.FAIL, bridgeGame);
          Console.close();
          return;
        case INPUT_VALUE.RETRY:
          bridgeGame.retry();
          this.progressGame(bridgeGame);
      }
    });
  }

  play() {
    this.startGame();
  }
}
const app = new App();
app.play();

module.exports = App;
