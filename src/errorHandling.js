const validateBridgeSize = {
  validate(number) {
    this.isNumber(number);
    this.isRange(number);
  },
  isNumber(number) {
    if (isNaN(+number)) throw new Error('[ERROR]');
  },
  isRange(number) {
    if (+number < 3 || +number > 30) throw new Error('[ERROR]');
  },
};

const validateNext = {
  validate(next) {
    if (next !== 'U' && next !== 'D') throw new Error('[ERROR]');
  },
};

const validateGameCommand = {
  validate(next) {
    if (next !== 'R' && next !== 'Q') throw new Error('[ERROR]');
  },
};

module.exports = { validateBridgeSize, validateNext, validateGameCommand };
