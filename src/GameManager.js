const {Console} = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class GameManager {
    constructor() {
        this.inputView = InputView;
        this.outputView = OutputView;
        this.bridgeGame = null;
    }
    setBridgeAnswer() {
        let size;
        while(!size) {
            try {
                size = this.inputView.readBridgeSize();
            } catch (err) {
                Console.print(err.message);
            }
        }

        const bridgeAnswer = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

        this.bridgeGame = new BridgeGame(size, bridgeAnswer);
    }
}

module.exports = GameManager;