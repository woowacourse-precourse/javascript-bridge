const Validation = {
  validateSize(input) {
    if (Number.isNaN(Number(input))) throw new Error('[ERROR]');
    if (!Number.isInteger(input)) throw new Error('[ERROR]');
    if (input < 3 || input > 20) throw new Error('[ERROR]');
  },
};

module.exports = Validation;
