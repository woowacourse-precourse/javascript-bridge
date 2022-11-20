const CheckPlayerStatus = {
  isPlayerPassed(move, stage) {
    if (move !== stage) return false;
    return true;
  },

  isPlayerCleared(endStage, currentStage, isPassed) {
    if (endStage === currentStage && isPassed) return true;
    return false;
  },
};

module.exports = CheckPlayerStatus;
