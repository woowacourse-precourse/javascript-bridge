const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./validation/Validation");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      const { error } = Validation.validateBridgeSize(size);
      if (error) {
        Console.print(error);
        return this.inputBridgeSize();
      }
      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);
      this.inputUpsideDown();
    });
  }

  inputUpsideDown() {
    InputView.readMoving((upsideDown) => {
      const { error } = Validation.validateUpsideDown(upsideDown);
      if (error) {
        Console.log(error);
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
      const { error } = Validation.validateRetryQuit(retryQuit);
      if (error) {
        Console.print(error);
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
    const isFail = this.bridgeGame.isFail();
    Console.print(`${!isFail ? "\n" : ""}최종 게임 결과`);
    OutputView.printMap(this.bridgeGame.getBridgeResult());
    OutputView.printResult(this.bridgeGame.getResult());
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
