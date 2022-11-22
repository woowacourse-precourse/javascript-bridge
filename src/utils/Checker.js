/**
 * 게임 진행 조건을 확인하는 역할을 한다.
 */
const Checker = {
  /**
   * 사용자 입력값과 이동하고자 하는 칸의 값을 비교한다.
   * @param {string} movingInput 사용자 입력값
   * @param {string} bridgeSpace bridge 값
   * @returns {boolean}
   */
  checkSpaceCanMove(movingInput, bridgeSpace) {
    return movingInput === bridgeSpace;
  },

  /**
   * 이동 상태 마지막 값이 false이거나 다리 길이와 같으면 게임 종료
   * @param {[[string, boolean][]]} movingState
   * @param {string[]} bridge
   * @returns {boolean}
   */
  checkGameOver(movingState, bridge) {
    return (
      !movingState[movingState.length - 1][1] ||
      bridge.length === movingState.length
    );
  },
};

module.exports = Checker;
