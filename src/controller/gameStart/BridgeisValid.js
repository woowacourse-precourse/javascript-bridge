const { readBridgeSize } = require('../../view/InputView');
const { catchSizeError } = require('../../model/CatchError');

const BridgeSizeControll = () => {
  let bridgeSize = readBridgeSize();
  while (!catchSizeError(bridgeSize)) {
    bridgeSize = readBridgeSize();
  }
  return bridgeSize;
};

module.exports = BridgeSizeControll;
