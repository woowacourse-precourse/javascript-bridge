/**
 * 게임 성공 실패를 판단하는 역할을 한다.
 */
const Judge = {
  /**
   * 게임 성공 여부를 반환한다.
   * @param {[string, boolean][]} movingState 이동 상태
   * @param {string[]} bridge 다리 정보
   * @returns {boolean}
   */
  judgeGameSuccess(movingState, bridge) {
    return (
      movingState.length === bridge.length &&
      movingState[movingState.length - 1][1]
    );
  },
};

module.exports = Judge;
