const Validation = {
  validateBridgeSize(input) {
    this.isNotNumber(input);
    this.isInRange(input);
  },

  isNotNumber(input) {
    if (isNaN(input)) throw new Error("[ERROR]");
  },
  isInRange(input) {
    if (input < 3 || input > 20) throw new Error("[ERROR]");
  },
};

module.exports = Validation;
