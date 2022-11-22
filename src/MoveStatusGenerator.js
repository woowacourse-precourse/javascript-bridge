const { STATUS } = require('./utils/const');

const MoveStatusGenerator = {
  FAILURE: STATUS.FAILURE,
  SUCCESS: STATUS.SUCCESS,
  CONTINUE: STATUS.CONTINUE,

  /**
   * @param {boolean} isCorrect
   * @param {boolean} isLast
   * @return {0 | 1 | 2}
   */
  generate(isCorrect, isLast) {
    if (!isCorrect) return MoveStatusGenerator.FAILURE;
    if (isLast) return MoveStatusGenerator.SUCCESS;
    return MoveStatusGenerator.CONTINUE;
  },
};

module.exports = MoveStatusGenerator;
