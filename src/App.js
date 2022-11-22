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
      const bridge = new BridgeGame(
        BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate),
        0,
        1
      );
      this.progressGame(bridge);
    });
  }

  progressGame(bridge) {
    InputView.readMoving((answer) => {
      if (bridge.checkInputIsCorrect(answer)) {
        this.moveUserBridge(answer, bridge);
        return;
      }

      this.stopUserBridge(answer, bridge);
      this.askRetry(bridge);
    });
  }

  moveUserBridge(answer, bridge) {
    bridge.move(answer);
    OutputView.printMap(bridge.getCurrentBridge());

    if (!this.checkIsGameSuccess(bridge)) {
      bridge.addStep();
      this.progressGame(bridge);
    }
  }

  checkIsGameSuccess(bridge) {
    if (bridge.checkIsLastStep()) {
      OutputView.printResult(STATES.SUCCESS, bridge);
      Console.close();
      return true;
    }

    return false;
  }

  stopUserBridge(answer, bridge) {
    bridge.stop(answer);
    OutputView.printMap(bridge.getCurrentBridge());
  }

  askRetry(bridge) {
    InputView.readGameCommand((answer) => {
      switch (answer) {
        case INPUT_VALUE.QUIT:
          OutputView.printResult(STATES.FAIL, bridge);
          Console.close();
          return;
        case INPUT_VALUE.RETRY:
          bridge.retry();
          this.progressGame(bridge);
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
