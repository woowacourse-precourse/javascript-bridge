const { isInRange } = require('../../lib/utils');

const InputException = {
  handleBridgeSizeException(bridgeSize) {
    if (bridgeSize === '' || isNaN(bridgeSize) || !isInRange(bridgeSize, 3, 20)) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    }
  }
};

module.exports = InputException;
