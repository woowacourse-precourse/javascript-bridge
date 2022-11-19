const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    OutputView.printStart();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      const bridge = makeBridge(bridgeSize, generate);
      this.bridgeGame = new BridgeGame(bridge);

      MissionUtils.Console.print(bridge);
      this.requestMoving();
    });
  }

  requestMoving() {
    InputView.readMoving((input) => {
      
    })
  }
}

const app = new App();
app.play();

module.exports = App;
