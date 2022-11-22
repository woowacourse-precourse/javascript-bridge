const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Checker = require("./Checker");
const Error = require("./Error");

class App {
  #tryCount;
  #game;

  constructor() {
    this.#tryCount = 1;
  }

  play() {
    OutputView.printGameStart();
    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize((input) => {
      if (Error.isThrow(Checker.bridgeSize, input)) {
        this.makeBridge(input);
        return;
      }
      this.readBridgeSize();
    });
  }

  makeBridge(size) {
    this.makeGame(size);
    this.moveAfterValidation();
  }

  makeGame(size) {
    const bridge = BridgeMaker.makeBridgeMain(Number(size));
    this.#game = new BridgeGame(bridge);
  }
  }
}

module.exports = App;
const app = new App();
app.play();
