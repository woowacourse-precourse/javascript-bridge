const InputView = require("./feature/View/InputView");
const OutputView = require("./feature/View/OutputView");
const BridgeGame = require("./feature/BridgeGame/BridgeGame");
const VaildationCheck = require("./feature/Validation/VaildationCheck");

class App {
  bridgeGame;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.configBridge.bind(this));
  }

  playing() {
    if (this.gameSuccessCheck()) return this.end();

    if (!this.gamePlayingCheck())
      return InputView.readGameCommand(this.commmand.bind(this));

    return InputView.readMoving(this.move.bind(this));
  }

  configBridge(bridgeSize) {
    try {
      bridgeSize = Number(bridgeSize);
      VaildationCheck.isNumber(bridgeSize);
      VaildationCheck.isNumberIntheRange([3, 20], bridgeSize);
      this.bridgeGame = new BridgeGame(bridgeSize);
    } catch (e) {
      OutputView.print(e);
      return InputView.readBridgeSize(this.configBridge.bind(this));
    }
    this.playing();
  }

  move(moveInput) {
    try {
      VaildationCheck.isStringIntheList(["U", "D"], moveInput);
      const { movementStatus } = this.bridgeGame.move(moveInput);
      OutputView.printMap(movementStatus);
    } catch (e) {
      OutputView.print(e);
      return InputView.readMoving(this.move.bind(this));
    }
    return this.playing();
  }

  commmand(retryInput) {
    try {
      const retryResult = this.bridgeGame.retry(retryInput);
      if (retryResult) return this.playing();
      return this.end();
    } catch (e) {
      OutputView.print(e);
      return InputView.readGameCommand(this.commmand.bind(this));
    }
  }

  gamePlayingCheck() {
    return this.bridgeGame.gameStatus.playing;
  }
  gameSuccessCheck() {
    return this.bridgeGame.gameStatus.success;
  }
  end() {
    OutputView.printEnd();
    OutputView.printResult(this.bridgeGame.gameStatus);
    InputView.close();
  }
}

const app = new App();
app.play();

module.exports = App;
