const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeChecker = require('../controller/BridgeChecker');
const Console = require('../utils/Console');
const InputView = require('../views/InputView');
const DataHandler = require('../utils/DataHandler');

class Bridge {
  #data = {
    bridge: [],
    bridgeSize: 0,
  };

  constructor({ bridgeSize, makeBridge, initialize }) {
    Console.print('');
    this.#makeSize(bridgeSize, initialize);
    this.#data.bridge = makeBridge(this.#data.bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  get() {
    return this.#data.bridge;
  }

  #makeSize(rowDataOfBridgeSize, makeBridge) {
    try {
      BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
      this.#data.bridgeSize = DataHandler.convertStringToDecimalNumber(rowDataOfBridgeSize);
      BridgeChecker.checkBridgeSize(this.#data.bridgeSize);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(makeBridge);
    }
  }
}

module.exports = Bridge;
