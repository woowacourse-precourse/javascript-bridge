/**
 * 사용자 입력을 다리에 표시하는 클래스
 */
class UserBridge {
  // condition: 플레이어가 이동한 경로('O' 또는 'X')를 저장하는 배열
  condition;

  constructor() {
    this.condition = [];
  }

  /**
   * 플레이어의 이번 이동에 따라 총 이동 경로를 수정하는 메서드
   * @param {string} movement 플레이어의 이번 이동 경로
   */
  addMovement(movement) {
    this.condition.push(movement);
  }

  // 플레이어가 게임을 재시작하였을 때 총 이동 경로를 초기화하는 메서드
  refreshCondition() {
    this.condition = [];
  }
}

module.exports = UserBridge;
