const { ERROR } = require('../utiles/Constant');

class BridgeSize {
  validate(size) {
    this.checkWord(size);
    this.checkRange(size);
  };

  checkWord(size) {
    if (size.match(/[0-9]/g) === null) {
      throw new Error(ERROR.SIZE_WORD);
    };
  };

  checkRange(size) {
    if (size < 3 || size > 20) {
      throw new Error(ERROR.SIZE_RANGE);
    };
  };
};

module.exports = BridgeSize;
