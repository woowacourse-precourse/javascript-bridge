const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const Validation = require("./validation/Validation");

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    OutputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        Validation.validateBridgeSize(size);
      } catch (error) {
        OutputView.printError(error);
        return this.inputBridgeSize();
      }
      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);
      this.inputUpsideDown();
    });
  }

  inputUpsideDown() {
    InputView.readMoving((upsideDown) => {
      try {
        Validation.validateUpsideDown(upsideDown);
      } catch (error) {
        OutputView.printError(error);
        return this.inputUpsideDown();
      }
      this.bridgeGame.move(upsideDown);
      OutputView.printMap(this.bridgeGame.getBridgeResult());

      if (this.bridgeGame.isFail()) return this.inputRetryQuit();
      if (this.bridgeGame.isSuccess()) return this.quitGame();
      return this.inputUpsideDown();
    });
  }

  inputRetryQuit() {
    InputView.readGameCommand((retryQuit) => {
      try {
        Validation.validateRetryQuit(retryQuit);
      } catch (error) {
        OutputView.printError(error);
        return this.inputRetryQuit();
      }
      if (retryQuit === "R") return this.retryGame();
      return this.quitGame();
    });
  }

  retryGame() {
    this.bridgeGame.retry();
    this.inputUpsideDown();
  }

  quitGame() {
    OutputView.printEnd(this.bridgeGame.isFail());
    OutputView.printMap(this.bridgeGame.getBridgeResult());
    OutputView.printResult(this.bridgeGame.getResult());
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
