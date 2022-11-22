const { ERROR } = require('../util/Constant');
const OutputView = require('../View/OutputView');

class CheckBridgeSize {
  validate(size) {
    try {
      this.checkError(size);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  checkError(size) {
    this.checkNotNumber(size);
    this.checkNotRange(size);
  }

  checkNotNumber(size) {
    if (size.match(/[^0-9]/g)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
  }

  checkNotRange(size) {
    if (size < 3 || size > 20) {
      throw new Error(ERROR.NOT_RANGE);
    }
  }
}

module.exports = CheckBridgeSize;
