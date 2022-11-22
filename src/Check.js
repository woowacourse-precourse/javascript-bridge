const OutputView = require('./OutputView');
const Message = require('./Message');

const Check = {
  checkSize(size) {
    try {
      this.checkNumber(size);
      this.checkRange(size);
    } catch (e) {
      OutputView.printError(e);
      return false;
    }
    return true;
  },

  checkNumber(number) {
    if (!Number(number)) {
      throw new Error(Message.ERROR.NUM_ERROR);
    }
  },

  checkRange(range) {
    if (Number(range) < 3 || Number(range) > 20) {
      throw new Error(Message.ERROR.RANGE_ERROR);
    }
  },

  checkStr(userInput) {
    try {
      const isTrue = userInput === 'U' || userInput === 'D';
      if (!isTrue) {
        throw new Error(Message.ERROR.INPUT_ERROR);
      }
    } catch (e) {
      OutputView.printError(e);
      return false;
    }
    return true;
  },

  checkEndStr(userInput) {
    try {
      const isTrue = userInput === 'R' || userInput === 'Q';
      if (!isTrue) {
        throw new Error(Message.ERROR.GAMEOVER_ERROR);
      }
    } catch (e) {
      OutputView.printError(e);
      return false;
    }
    return true;
  },
};

module.exports = Check;