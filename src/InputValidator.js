const InputValidator = {
  isValidLength(input) {
    if (!Number.isInteger(+input)) {
      return false;
    }
    if (!(+input > 0)) {
      return false;
    }
    return 3 <= +input && +input <= 20;
  },
};

module.exports = InputValidator;
