const { MOVE_RESULT } = require('../constant/Constant');

class ResultJudger {
  #isPlayerFail(bridge, bridgeCrossCount, movingDirection) {
    return bridge[bridgeCrossCount - 1] !== movingDirection;
  }

  #isLastRound(bridge, bridgeCrossCount) {
    return bridge.length === bridgeCrossCount;
  }
}

module.exports = ResultJudger;
