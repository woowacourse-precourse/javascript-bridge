const { UTIL, ERROR } = require('./constant');

const Validation = {
  /**
   * 다리 사이즈 입력에 대한 예외 처리를 수행한다.
   * @param {number} input 사용자의 다리 길이 입력값
   */
  validateSize(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.SIZE_NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.SIZE_INTEGER);
    if (input < UTIL.MIN || input > UTIL.MAX) throw new Error(ERROR.SIZE_RANGE);
  },

  /**
   * 이동한 칸 입력에 대한 예외 처리를 수행한다.
   * @param {string} input 사용자의 이동 칸 입력값
   */
  validateMove(input) {
    if (input !== UTIL.UP && input !== UTIL.DOWN) throw new Error(ERROR.MOVE);
  },

  /**
   * 게임 재시작 및 종료 여부에 대한 예외 처리를 수행한다.
   * @param {string} input 사용자의 게임 재시작 및 종료 여부 입력값
   */
  validateReGame(input) {
    if (input !== UTIL.RETRY && input !== UTIL.QUIT) {
      throw new Error(ERROR.REGAME);
    }
  },
};

module.exports = Validation;
