const validator = {
  checkBridgeSizeInput(input) {
    return this.checkIsNum(input) && this.checkNumRange(input);
  },

  checkIsNum(input) {
    return /^[0-9]*$/g.test(input);
  },

  checkNumRange(input) {
    return input >= 3 && input <= 20;
  },
};

module.exports = validator;
