const { STATUS } = require('./utils/const');

const StatusGenerator = {
  FAILURE: STATUS.FAILURE,
  SUCCESS: STATUS.SUCCESS,
  CONTINUE: STATUS.CONTINUE,

  /**
   * @param {boolean} isCorrect
   * @param {boolean} isLast
   * @return {0 | 1 | 2}
   */
  generate(isCorrect, isLast) {
    if (!isCorrect) return StatusGenerator.FAILURE;
    if (isLast) return StatusGenerator.SUCCESS;
    return StatusGenerator.CONTINUE;
  },
};

module.exports = StatusGenerator;
