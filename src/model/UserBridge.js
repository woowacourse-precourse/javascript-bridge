/**
 * 사용자 입력을 다리에 표시하는 클래스
 */
class UserBridge {
  condition;
  constructor() {
    this.condition = [];
  }

  addMovement(movement) {
    this.condition.push(movement);
  }

  refreshCondition() {
    this.condition = [];
  }
}

module.exports = UserBridge;
