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
    console.log(bridge.getBridge());
    InputView.readMoving((answer) => {
      // if (bridge.checkInputIsCorrect(answer, bridge.step)) {
      //   OutputView.printMap(bridge.step, bridge.getBridge());
      //   if (bridge.checkIsLastStep(bridge.step, size - 1)) {
      //     OutputView.printResult(
      //       "성공",
      //       bridge.round,
      //       bridge.step,
      //       bridge.getBridge()
      //     );
      //     return;
      //   }
      //   bridge.addStep();
      //   this.progressGame(bridge, size);
      //   return;
      // }
      // OutputView.printWrongMap(bridge.step, bridge.getBridge());
      // this.askRetry(bridge, size);

      if (bridge.checkInputIsCorrect(answer, bridge.step)) {
        bridge.move(answer);
        OutputView.printMap(bridge.getCurrentBridge());
        if (bridge.checkIsLastStep(bridge.step, size - 1)) {
          OutputView.printResult(
            "성공",
            bridge.round,
            bridge.step,
            bridge.getBridge(),
            bridge.getCurrentBridge()
          );
          return;
        }
        bridge.addStep();
        this.progressGame(bridge, size);
        return;
      }
      bridge.stop(answer);
      OutputView.printMap(bridge.getCurrentBridge());
      this.askRetry(bridge, size);
    });
  }

  askRetry(bridge, size) {
    InputView.readGameCommand((answer) => {
      if (answer === "Q") {
        OutputView.printResult("실패", bridge.round, bridge.getBridge());
        return;
      }
      if (answer === "R") {
        bridge.addRound();
        bridge.resetStep();
        bridge.resetCurrentBridge();
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
