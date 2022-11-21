/**
 * 입력값 유효성 검사
 */
const ValidateInput = {
  /**
   * 다리의 길이가 3~20의 숫자인지 검사
   */
  bridgeSize(size) {
    if (isNaN(size)) return false;
    size = Number(size);
    if (size < 3 || size > 20) return false;
    return true;
  },

  /**
   * 이동할 칸이 U/D인지 검사
   */
  moving() {},

  /**
   * 재시도 여부가 R/Q인지 검사
   */
  gameCommand() {},
};

module.exports = ValidateInput;
