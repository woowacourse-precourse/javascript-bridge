const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
    COUNT = 0;
    BRIDGE = [];

    play() {
        OutputView.printHello();
        const length = InputView.readBridgeSize();
        this.BRIDGE = BridgeMaker.makeBridge(
            length,
            BridgeRandomNumberGenerator
        );
    }
}

module.exports = App;
