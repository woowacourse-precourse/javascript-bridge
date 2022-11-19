const InputView = require('./InputView');
const OutputView = require('./OutputView');

class GameController {
    startGame() {
        OutputView.printOpening();
        this.readBridgeSize();
    }

    readBridgeSize() {
        InputView.readBridgeSize();
    }
}

module.exports = GameController;
