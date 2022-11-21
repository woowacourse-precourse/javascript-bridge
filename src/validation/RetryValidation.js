const { RETRY_COMMAND } = require("../constants");

/**
 * 사용자가 입력한 재도전 여부의 유효성을 검사한다.
 */
class RetryValidation {
  constructor(input) {
    this.validate(input);
  }

  /**
   * 사용자의 이동 방향이 'R' 또는 'Q'로 입력되는지 판별한다.
   * @param {string} input - 사용자의 재도전 여부
   */
  validate(input) {
    const values = Object.values(RETRY_COMMAND);
    if (!values.includes(input)) throw "[ERROR] R또는 Q로 입력해주세요";
  }
}

module.exports = RetryValidation;
