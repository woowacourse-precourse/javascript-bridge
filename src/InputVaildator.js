const InputVaildator = {
  isVaildLength(input) {
    if (!Number.isInteger(+input)) {
      return false;
    }
    return +input > 0;
  },
};

module.exports = InputVaildator;
