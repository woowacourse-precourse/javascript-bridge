const { GAME_RESULT, GAME_CONDITION } = require("../utils/Constants");

const BridgeGameResult = {
  isSuccess(isEnd) {
    return isEnd ? GAME_RESULT.STATUS_SUCCESS : GAME_RESULT.STATUS_FAIL;
  },

  gameResult(isEnd, attempts) {
    return `${GAME_RESULT.GAME_STATUS(
      BridgeGameResult.isSuccess(isEnd)
    )} ${GAME_RESULT.TOTAL_ATTEMPTS(attempts)}`;
  },
};

module.exports = BridgeGameResult;
