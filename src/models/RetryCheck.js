const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class RetryCheck {
  validate(command) {
    try {
      this.checkWordAndRange(command);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
  };

  checkWordAndRange(command) {
    this.checkWord(command);
    this.checkRange(command);
  };

  checkWord(command) {
    if (!String(command).match(/[RQ]/g)) {
      throw (ERROR.retryWord);
    };
  };

  checkRange(command) {
    if (command.length > 1) {
      throw (ERROR.retryLength);
    };
  };
};

module.exports = RetryCheck;
