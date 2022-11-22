const { MOVE_RESULT } = require('../constant/Constant');

class ResultJudger {
  getRoundResult(bridge, bridgeCrossCount, movingDirection) {
    if (this.#isPlayerFail(bridge, bridgeCrossCount, movingDirection)) {
      return MOVE_RESULT.FAIL;
    }

    if (this.#isLastRound(bridge, bridgeCrossCount)) {
      return MOVE_RESULT.CLEAR;
    }

    return MOVE_RESULT.OK;
  }

  #isPlayerFail(bridge, bridgeCrossCount, movingDirection) {
    return bridge[bridgeCrossCount - 1] !== movingDirection;
  }

  #isLastRound(bridge, bridgeCrossCount) {
    return bridge.length === bridgeCrossCount;
  }
}

module.exports = ResultJudger;
