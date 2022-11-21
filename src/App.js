const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");

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
    this.checkIsGameSuccess(bridge, size);
    bridge.addStep();
    this.progressGame(bridge, size);
  }

  checkIsGameSuccess(bridge, size) {
    if (bridge.checkIsLastStep(bridge.step, size - 1)) {
      OutputView.printResult("성공", bridge);
      return;
    }
  }

  stopUserBridge(answer, bridge) {
    bridge.stop(answer);
    OutputView.printMap(bridge.getCurrentBridge());
  }

  askRetry(bridge, size) {
    InputView.readGameCommand((answer) => {
      switch (answer) {
        case "Q":
          OutputView.printResult("실패", bridge);
          return;
        case "R":
          this.resetGame(bridge);
          this.progressGame(bridge, size);
      }
    });
  }

  resetGame(bridge) {
    bridge.addRound();
    bridge.resetStep();
    bridge.resetCurrentBridge();
  }
  play() {
    this.startGame();
  }
}
const app = new App();
app.play();

module.exports = App;
