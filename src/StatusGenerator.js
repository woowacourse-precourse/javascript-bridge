const StatusGenerator = {
  FAILURE: 0,
  SUCCESS: 1,
  CONTINUE: 2,

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
