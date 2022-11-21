const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumber = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');

class Player {
    createBridgeAnswer() {
        const size = InputView.readBridgeSize();
        const generator = BridgeRandomNumber.generate;
        const bridgeAnswer = BridgeMaker.makeBridge(size, generator);

        return bridgeAnswer;
    }
}


module.exports = Player;