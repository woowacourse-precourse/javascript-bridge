const checkPlayerMovement = {
  isPlayerPassed(move, stage) {
    // 상수처리 필요
    if ((move === 'U' && stage[0] === 1) || (move === 'D' && stage[1] === 1)) {
      return true;
    }
    return false;
  },

  isPlayerCleared(endStage, currentStage) {
    if (endStage === currentStage) return true;
    return false;
  },
};

module.exports = checkPlayerMovement;
