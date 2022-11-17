const Validator = {
  /**
   * @param {string} input // 입력된 문자열
   */
  validateIsNumber(input) {
    if (!input.trim() || Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다');
    }
  },

  /**
   * @param {number} start // 체크할 범위의 시작
   * @param {number} end // 체크할 범위의 끝
   * @param {string} input // 입력된 문자열
   */
  validateInRange(start, end, input) {
    if (Number(input) < start || Number(input) > end) {
      throw new Error('[ERROR] 3 ~ 20 사이의 숫자만 입력 가능합니다.');
    }
  },

  /**
   * @param {string[]} allowedSet // 입력이 허용되는 문자의 집합
   * @param {string} input // 입력된 숫자
   */
  validateIncludes(allowedSet, input) {
    if (!allowedSet.includes(input)) {
      throw new Error('[ERROR] 허용되는 문자가 아닙니다.');
    }
  },
};

module.exports = Validator;
