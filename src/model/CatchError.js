const {
  bridgeSizeError,
  movingError,
  reGameError,
} = require('../view/InputErrorView');
const {
  printBridgeSize,
  printBridgeSizeErr,
  printUserMove,
  printUserMoveErr,
  printRestart,
} = require('../OutputView');

const catchError = {
  catchSizeError(size) {
    printBridgeSize(size);
    try {
      bridgeSizeError(size);
    } catch (error) {
      printBridgeSizeErr();
      return false;
    }
    return true;
  },

  catchMoveError(move) {
    printUserMove(move);
    try {
      movingError(move);
    } catch (error) {
      printUserMoveErr();
      return false;
    }
    return true;
  },

  catchRetryError(retry) {
    printRestart();
    try {
      reGameError(retry);
    } catch (error) {
      printRestart();
      return false;
    }
    return true;
  },

  catchResultError(bridgegameobj, usermove, eachbridge) {
    try {
      bridgegameobj.moveCaseAction(usermove, eachbridge);
    } catch (error) {
      printRestart();
      return false;
    }
    return true;
  },
};

module.exports = catchError;
