/**
 * 사용자가 입력한 이동할 칸에 대한 유효성을 검사하는 역할을 한다.
 */
const BridgeMovingValidator = {
  VALID_MOVING_LIST: ['U', 'D'],
  /**
   * 사용자가 입력한 이동할 칸에 대한 유효성을 검사하는 메서드
   * @param {string} moving
   * @throws 유효하지 않은 이동인 경우 error를 throw한다.
   */
  validateMoving(moving) {
    if (this.isInvalidMoving(moving)) {
      throw new Error(
        '[ERROR] 유효하지 않은 이동입니다. U 또는 D를 입력해 주세요.',
      );
    }
  },

  /**
   * 사용자가 입력한 이동이 유효하지 않은 이동인지 판단하는 메서드
   * @param {string} moving
   * @returns {boolean} 유효하지 않은 이동인 경우 true, 아니면 false를 반환한다.
   */
  isInvalidMoving(moving) {
    return !this.VALID_MOVING_LIST.includes(moving);
  },
};

module.exports = BridgeMovingValidator;
