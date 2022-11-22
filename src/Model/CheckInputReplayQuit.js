const { ERROR } = require('../util/Constant');
const OutputView = require('../View/OutputView');

class CheckInputReplayQuit {
  validate(inputReplayQuit) {
    try {
      this.checkError(inputReplayQuit);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  checkError(inputReplayQuit) {
    this.checkReplayQuit(inputReplayQuit);
    this.checkOneCharactor(inputReplayQuit);
  }

  checkReplayQuit(inputReplayQuit) {
    if (!String(inputReplayQuit).match(/[RQ]/g)) {
      throw new Error(ERROR.REPLAY_WRONG);
    }
  }

  checkOneCharactor(inputReplayQuit) {
    if (inputReplayQuit.length > 1) {
      throw new Error(ERROR.REPLAY_WRONG);
    }
  }
}

module.exports = CheckInputReplayQuit;
