const { isInRange } = require('../lib/utils');
const { GAME_COMMAND } = require('../lib/constans');

const GameException = {
  handleBridgeSizeException(bridgeSize) {
    if (bridgeSize === '' || isNaN(bridgeSize) || !isInRange(bridgeSize, 3, 20)) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    }
  },

  handleMovingException(moving) {
    if (moving !== GAME_COMMAND.up && moving !== GAME_COMMAND.down) {
      throw '[ERROR] U(위) 또는 D(아래) 중에 선택해야 합니다.';
    }
  },

  handleRetryException(command) {
    if (command !== GAME_COMMAND.retry && command !== GAME_COMMAND.quit) {
      throw '[ERROR] R(재시작) 또는 Q(종료) 중에 선택해야 합니다.';
    }
  }
};

module.exports = GameException;
