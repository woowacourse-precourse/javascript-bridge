/**
 * 플레이어의 진행상황 판별
 */
const CheckPlayerStatus = {
  /**
   * 이동이 성공했는지 판별하는 메서드
   */
  isPlayerPassed(move, stage) {
    return move === stage;
  },

  /**
   * 클리어에 성공했는지 판별하는 메서드
   */
  isPlayerCleared(endStage, currentStage, isPassed) {
    return endStage === currentStage && isPassed;
  },
};

module.exports = CheckPlayerStatus;
