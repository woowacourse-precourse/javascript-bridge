const { ERROR } = require('../utiles/Constant');

class AskRetry {
  validate(command) {
    this.checkWord(command);
    this.checkRange(command);
  };

  checkWord(command) {
    if (command.match(/[^RQ]/g) !== null) {
      throw new Error(ERROR.RETRY_WORD);
    };
  };

  checkRange(command) {
    if (command.length > 1) {
      throw new Error(ERROR.RETRY_LENGTH);
    };
  };
};

module.exports = AskRetry;
