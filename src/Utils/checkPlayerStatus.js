const checkPlayerStatus = {
  isPlayerPassed(move, stage) {
    // 상수처리 필요
    if (move !== stage) return false;
    return true;
  },

  isPlayerCleared(endStage, currentStage, isPassed) {
    if (endStage === currentStage && isPassed) return true;
    return false;
  },
};

module.exports = checkPlayerStatus;
