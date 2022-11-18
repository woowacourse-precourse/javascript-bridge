const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class AskRetry {
  validate(command) {
    this.validValue = true;
    this.checkWord(command);
    this.checkRange(command);
    return this.validValue;
  };

  checkWord(command) {
    try {
      if (command.match(/[RQ]/g) === null) {
        throw (ERROR.RETRY_WORD);
      };
    } catch(error) {
      OutputView.printError(error);
      this.validValue = false;
    };
  };

  checkRange(command) {
    try {
      if (command.length > 1 && this.validValue) {
        throw (ERROR.RETRY_LENGTH);
      };
    } catch(error) {
      OutputView.printError(error);
      this.validValue = false;
    };
  };
};

module.exports = AskRetry;
