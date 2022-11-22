const { readBridgeSize } = require('../../InputView');
const { catchSizeError } = require('../../model/CatchError');

const BridgeSizeControll = () => {
  let bridgeSize = readBridgeSize();
  if (catchSizeError(bridgeSize) === false) {
    bridgeSize = readBridgeSize();
  }
  return bridgeSize;
};

module.exports = BridgeSizeControll;
