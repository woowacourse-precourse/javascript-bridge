const MESSAGE = require('./Message');

const ValidateCheck = {
  lengthCheck(length) {
    if (Number.isNaN(Number(length)) || length < 3 || length > 20) {
      throw new Error(`[ERROR] ${MESSAGE.error.bridge.length}`);
    }
  },
  moveMessageCheck(move) {
    if (!(move === 'U' || move === 'D')) {
      throw new Error(`[ERROR] ${MESSAGE.error.move}`);
    }
  },
};

module.exports = ValidateCheck;
