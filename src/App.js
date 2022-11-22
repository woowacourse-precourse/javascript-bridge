const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Constants = require("./Constants");

class App {
  #gameprocess;

  play() {
    OutputView.printStartMessage();
    this.startGame(judgeTryInput(InputView.readBridgeSize()));
  }

  startGame(bridgeLength) {
    let bridgesize = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.#gameprocess = new BridgeGame(bridgesize);
  }

  static #tryInput(readBridgeSize) {
    try {
      return readBridgeSize();
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }

  judgeTryInput(userInputValue) {
    let judgeValue = false;

    do {
      judgeValue = App.#tryInput(userInputValue);
    } while (judgeValue !== false);

    return judgeValue;
  }
}

const app = new App();
app.play();

module.exports = App;
