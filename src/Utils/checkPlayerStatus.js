const CheckPlayerStatus = {
  /**
   * 이동이 성공했는지 판별하는 메서드
   */
  isPlayerPassed(move, stage) {
    if (move !== stage) return false;
    return true;
  },

  /**
   * 클리어에 성공했는지 판별하는 메서드
   */
  isPlayerCleared(endStage, currentStage, isPassed) {
    if (endStage === currentStage && isPassed) return true;
    return false;
  },
};

module.exports = CheckPlayerStatus;
