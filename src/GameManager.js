const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MESSAGE } = require('./const.js');


class GameManager {
    constructor() {

    }

    startGame() {
        OutputView.displayMessage(MESSAGE.GAME_START);
        this.getInputBridgeLength();
    }

    getInputBridgeLength() {
        InputView.readBridgeSize((bridgeSize) => {
            try {
                Validator.validateBridgeSize(bridgeSize);
                let bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
                // to get move bridge
            } catch(error) {
                OutputView.displayMessage(error.message)
                this.getInputBridgeLength();
            }
        })
    }


}

module.exports = GameManager;