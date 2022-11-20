/**
 * 사용자가 입력한 이동할 칸에 대한 유효성을 검사하는 역할을 한다.
 */
const BridgeMovingValidator = {
  MOVE_UP: 'U',
  MOVE_DOWN: 'D',
  /**
   * 사용자가 입력한 이동할 칸에 대한 유효성을 검사하는 메서드
   * @param {string} moving
   * @throws 유효하지 않은 이동인 경우 error를 throw한다.
   */
  validate(moving) {
    if (this.isInvalidMoving(moving)) {
      throw new Error(
        `[ERROR] 유효하지 않은 이동입니다. ${this.MOVE_UP} 또는 ${this.MOVE_DOWN}를 입력해 주세요.`,
      );
    }
  },

  /**
   * 사용자가 입력한 이동이 유효하지 않은 이동인지 판단하는 메서드
   * @param {string} moving
   * @returns {boolean} 유효하지 않은 이동인 경우 true, 아니면 false를 반환한다.
   */
  isInvalidMoving(moving) {
    return ![this.MOVE_UP, this.MOVE_DOWN].includes(moving);
  },
};

module.exports = BridgeMovingValidator;
