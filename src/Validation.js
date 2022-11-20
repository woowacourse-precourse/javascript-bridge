const Validation = {
  isPositiveInteger(size) {
    // FIXME: fix if condition
    if (
      // FIXME: 5 입력해도 통과
      !(Number.isInteger(size) && size > 0 && size % parseInt(size, 10) === 0)
    ) {
      return false;
    }
    return true;
  },

  isRightUserMove(input) {
    if (input !== 'U' && input !== 'D') return false;

    return true;
  },

  isRightUserCommand(input) {
    if (input !== 'R' && input !== 'Q') return false;

    return true;
  },
};

module.exports = Validation;
