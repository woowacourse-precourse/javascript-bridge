const Utils = require('./utils/Utils');

class Validation {
  checkRestartRequirement() {}

  checkIsLastMove(moveCount, bridge) {
    if (moveCount === bridge.length) return true;

    return false;
  }

  checkMoveSuccess(bridgeGameLog, movePosition) {
    if (
      Utils.getLastInputResult(bridgeGameLog, 0, movePosition) === PARAMETERS.immovable ||
      Utils.getLastInputResult(bridgeGameLog, 1, movePosition) === PARAMETERS.immovable
    ) {
      return false;
    }
  
    return true;
  }
}

module.exports = Validation;
