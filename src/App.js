const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
    play() {
        OutputView.printHello();
        const length = InputView.readBridgeSize();
    }
}

module.exports = App;
