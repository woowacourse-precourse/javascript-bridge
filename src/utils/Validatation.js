const MESSAGE = require('./Message');

const ValidateCheck = {
  lengthCheck(length) {
    if (!(length >= 3 && length <= 20)) {
      throw new Error(`[ERROR] ${MESSAGE.error.bridge.length}`);
    }
  },
  moveMessageCheck(move) {
    if (!(move === 'U' || move === 'D')) {
      throw new Error(`[ERROR] ${MESSAGE.error.move}`);
    }
  },
  restartMessageCheck(message) {
    if (!(message === 'R' || message === 'Q')) {
      throw new Error(`[ERROR] ${MESSAGE.error.restart}`);
    }
  },
};

module.exports = ValidateCheck;
