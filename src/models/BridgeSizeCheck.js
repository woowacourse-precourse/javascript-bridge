const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class BridgeSizeCheck {
  validate(size) {
    try {
      this.checkWordAndRange(size);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
  };

  checkWordAndRange(size) {
    this.checkWord(size);
    this.checkRange(size);
  };

  checkWord(size) {
    if (size.match(/[^0-9]/g)) {
      throw (ERROR.sizeWord);
    };
  };

  checkRange(size) {
    if (size < 3 || size > 20) {
      throw (ERROR.sizeRange);
    };
  };
};

module.exports = BridgeSizeCheck;
