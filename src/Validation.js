const { PARAMETERS } = require('./utils/constants');
const Utils = require('./utils/Utils');

class Validation {
  checkGameSuccess(moveCount, bridgeGameLog, bridge) {
    if (
      this.checkIsLastMove(moveCount, bridge) &&
      checkMoveSuccess(bridgeGameLog, bridge.length - 1)
    ) {
      return true;
    }

    return false;
  }

  checkRestartRequirement(moveCount, bridgeGameLog, bridge) {
    if (this.hasFailedOnLastMove(moveCount, bridgeGameLog, bridge)) {
      return true;
    }

    if (this.hasFailedInProgress(bridgeGameLog)) {
      return true;
    }

    return false;
  }

  hasFailedOnLastMove(moveCount, bridgeGameLog, bridge) {
    if (
      !this.checkIsLastMove(moveCount, bridge) ||
      !this.checkMoveSuccess(bridgeGameLog, bridge.length - 1)
    ) {
      return true;
    }

    return false;
  }

  hasFailedInProgress(bridgeGameLog) {
    const MOVE_POSITION = bridgeGameLog[0].length - 1;

    if (!this.checkMoveSuccess(bridgeGameLog, MOVE_POSITION)) return true;

    return false;
  }

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
