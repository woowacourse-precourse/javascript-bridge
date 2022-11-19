const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { GAME, MESSAGE } = require("./Constants");

class App {
  constructor() {
    this.bridgeGame = null;
    this.bridgeSize = 0;
  }

  play() {
    OutputView.printMsg(MESSAGE.GAME_START);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeSize = bridgeSize;
      const bridge = makeBridge(bridgeSize, generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestMoving();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
