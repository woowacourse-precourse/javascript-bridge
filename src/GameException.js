const { isInRange } = require('../lib/utils');
const { MOVING } = require('../lib/constans');

const GameException = {
  handleBridgeSizeException(bridgeSize) {
    if (bridgeSize === '' || isNaN(bridgeSize) || !isInRange(bridgeSize, 3, 20)) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    }
  },

  handleMovingException(moving) {
    if (moving !== MOVING.up && moving !== MOVING.down) {
      throw '[ERROR] U(위) 또는 D(아래) 중에 선택해야 합니다.';
    }
  }
};

module.exports = GameException;
