const InputView = require("./views/InputView");
const InputMessage = require("./messages/InputMessage");
const OutputView = require("./views/OutputView");
const BridgeGame = require("./bridge/BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeMapMaker = require("./bridge/BridgeMapMaker");

class App {
  play() {
    OutputView.print(InputMessage.START_MESSAGE);
    const bridgeGame = new BridgeGame(BridgeMaker, new BridgeMapMaker());
    InputView.readBridgeSize(bridgeGame);
  }
}

new App().play();

module.exports = App;
