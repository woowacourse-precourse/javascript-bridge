const { UP_AND_DOWN } = require("../constants");

/**
 * 사용자가 입력한 이동 방향의 유효성을 검사한다.
 */
class MovingValidation {
  constructor(input) {
    this.validate(input);
  }

  /**
   * 사용자의 이동 방향이 'U' 또는 'D'로 입력되는지 판별한다.
   * @param {string} input - 사용자가 입력한 이동 방향
   */
  validate(input) {
    const values = Object.values(UP_AND_DOWN);
    if (!values.includes(input)) throw "[ERROR] U또는 D로 입력해주세요";
  }
}

module.exports = MovingValidation;
