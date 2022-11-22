/**
 * 입력값 유효성 검사
 */
const {
  BRIDGE_ERROR,
  MOVE_ERROR,
  RETRY_ERROR,
} = require("./constant/ErrorMessage");
const ValidateInput = {
  /**
   * 다리의 길이가 3~20의 숫자인지 검사
   * @param {number} size 입력받은 다리 길이
   */
  bridgeSize(size) {
    if (isNaN(size)) throw new Error(BRIDGE_ERROR.notANumber);
    size = Number(size);
    if (size < 3 || size > 20) throw new Error(BRIDGE_ERROR.outOfRange);
  },

  /**
   * 이동할 칸이 U/D인지 검사
   * @param {string} move 입력받은 이동 칸
   */
  moving(move) {
    if (move !== "U" && move !== "D") throw new Error(MOVE_ERROR.wrongChar);
  },

  /**
   * 재시도 여부가 R/Q인지 검사
   * @param {string} response 입력받은 재시도 여부
   */
  gameCommand(response) {
    if (response !== "Q" && response !== "R")
      throw new Error(RETRY_ERROR.wrongChar);
  },
};

module.exports = ValidateInput;
