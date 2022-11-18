const checkPlayerStatus = {
  isPlayerPassed(move, stage) {
    // 상수처리 필요
    if ((move === 'U' && stage[0] === 0) || (move === 'D' && stage[1] === 0)) return false;
    return true;
  },

  isPlayerCleared(endStage, currentStage, isPassed) {
    if (endStage === currentStage && isPassed) return true;
    return false;
  },
};

module.exports = checkPlayerStatus;
