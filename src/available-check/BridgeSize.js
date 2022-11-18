const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class BridgeSize {
  validate(size) {
    this.validValue = true;
    this.checkWord(size);
    this.checkRange(size);
    return this.validValue;
  };

  checkWord(size) {
    try {
      if (size.match(/[0-9]/g) === null) {
        throw (ERROR.SIZE_WORD);
      };
    } catch(error) {
      OutputView.printError(error);
      this.validValue = false;
    };
  };

  checkRange(size) {
    try {
      if (size < 3 || size > 20) {
        throw (ERROR.SIZE_RANGE);
      };
    } catch(error) {
      OutputView.printError(error);
      this.validValue = false;
    };
  };
};

module.exports = BridgeSize;
