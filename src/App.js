const { readBridgeSize } = require("./InputView");
const { bridgeSizeAndRandomNum } = require("./Controller");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const bridgeSize = require("./Controller");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStartMessage();
    readBridgeSize();
  }
}
const a = new App();
a.play();
module.exports = App;
