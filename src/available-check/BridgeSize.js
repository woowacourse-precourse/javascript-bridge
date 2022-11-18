const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class BridgeSize {
  validate(size) {
    try {
      this.checkWordAndRange(size);
    } catch(error) {
      OutputView.printError(error);
      return false;
    };
    
    return true;
  };

  checkWordAndRange(size) {
    this.checkWord(size);
    this.checkRange(size);
  };

  checkWord(size) {
    if (size.match(/[0-9]/g) === null) {
      throw (ERROR.SIZE_WORD);
    };
  };

  checkRange(size) {
    if (size < 3 || size > 20) {
      throw (ERROR.SIZE_RANGE);
    };
  };
};

module.exports = BridgeSize;
