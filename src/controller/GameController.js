const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeChecker = require('./BridgeChecker');
const Convertor = require('../utils/Convertor');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class GameController {
  playGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge);
  }

  #makeBridge(rowDataOfBridgeSize) {
    BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
    const bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
    BridgeChecker.checkBridgeSize(bridgeSize);
    BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator);
  }
}

module.exports = GameController;
