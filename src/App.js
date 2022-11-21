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
      const bridge = new BridgeGame(
        BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
      );
      this.progressGame(bridge, size);
    });
  }

  progressGame(bridge, size) {
    InputView.readMoving((answer) => {
      if (bridge.checkInputIsCorrect(answer, bridge.step)) {
        this.moveUserBridge(answer, bridge, size);
        return;
      }
      this.stopUserBridge(answer, bridge);
      this.askRetry(bridge, size);
    });
  }

  moveUserBridge(answer, bridge, size) {
    bridge.move(answer);
    OutputView.printMap(bridge.getCurrentBridge());
    if (!this.checkIsGameSuccess(bridge, size)) {
      bridge.addStep();
      this.progressGame(bridge, size);
    }
  }

  checkIsGameSuccess(bridge, size) {
    if (bridge.checkIsLastStep(bridge.step, size - 1)) {
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

  askRetry(bridge, size) {
    InputView.readGameCommand((answer) => {
      switch (answer) {
        case INPUT_VALUE.QUIT:
          OutputView.printResult(STATES.FAIL, bridge);
          Console.close();
          return;
        case INPUT_VALUE.RETRY:
          bridge.retry();
          this.progressGame(bridge, size);
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
