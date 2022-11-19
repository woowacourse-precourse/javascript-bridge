const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class RetryCheck {
  validate(command) {
    try {
      this.checkWordAndRange(command);
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
    
    return true;
  };

  checkWordAndRange(command) {
    this.checkWord(command);
    this.checkRange(command);
  };

  checkWord(command) {
    if (!String(command).match(/[RQ]/g)) {
      throw (ERROR.RETRY_WORD);
    };
  };

  checkRange(command) {
    if (command.length > 1) {
      throw (ERROR.RETRY_LENGTH);
    };
  };
};

module.exports = RetryCheck;
