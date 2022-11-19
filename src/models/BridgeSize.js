const BridgeChecker = require('../controller/BridgeChecker');
const Convertor = require('../utils/DataHandler');
const Console = require('../utils/Console');
const InputView = require('../views/InputView');

class BridgeSize {
  #bridgeSize;

  constructor(rowDataOfBridgeSize, makeBridge) {
    try {
      BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
      this.#bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
      BridgeChecker.checkBridgeSize(this.#bridgeSize);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(makeBridge);
    }
  }

  get() {
    return this.#bridgeSize;
  }
}

module.exports = BridgeSize;
