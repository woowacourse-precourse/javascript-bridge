const BridgeChecker = require('./BridgeChecker');
const Convertor = require('../utils/Convertor');
const Console = require('../utils/Console');
const InputView = require('../views/InputView');

const BridgeSizeMaker = {
  make(rowDataOfBridgeSize, makeBridge) {
    let bridgeSize = 0;

    try {
      bridgeSize = this.checkAndMakeBridgeSize(rowDataOfBridgeSize);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(makeBridge);
    }

    return bridgeSize;
  },

  checkAndMakeBridgeSize(rowDataOfBridgeSize) {
    BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
    const bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
    BridgeChecker.checkBridgeSize(bridgeSize);

    return bridgeSize;
  },
};

module.exports = BridgeSizeMaker;
