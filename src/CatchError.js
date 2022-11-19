const { bridgeSizeError, movingError } = require('./InputErrorView');
const {
  printBridgeSize,
  printBridgeSizeErr,
  printUserMove,
  printUserMoveErr,
} = require('./OutputView');

const catchError = {
  catchSizeError(size) {
    printBridgeSize(size);
    try {
      bridgeSizeError(size);
    } catch (err) {
      printBridgeSizeErr();
    }
  },
  catchMoveError(move) {
    printUserMove(move);
    try {
      movingError(move);
    } catch (err) {
      printUserMoveErr();
    }
  },
};

module.exports = catchError;
