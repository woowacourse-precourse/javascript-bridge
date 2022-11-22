const ConstValue = require('./ConstValue');
class BridgeGame {
  bridge;
  tryCount;
  constructor(bridge) {
    this.bridge = bridge;
    this.tryCount = 0;
  }

  move(moveDirection) {
    this.handleMoveDirectionException(moveDirection);
    if (this.bridge[this.tryCount] === moveDirection) {
      this.tryCount += 1;
      return true;
    }

    return false;
  }

  retry(command) {
    this.handleCommandInputException(command);
    if (this.checkCommandContinue(command)) {
      this.tryCount = 0;
      return true;
    }

    return false;
  }

  handleMoveDirectionException(moveDirection) {
    let count = 0;
    if (moveDirection === 'U') {
      count += 1;
    }

    if (moveDirection === 'D') {
      count += 1;
    }

    if (count === 0) {
      throw new Error(ConstValue.MOVE_DIRECTION_EXCEPTION_ERROR_MESSAGE);
    }
  }

  checkSuccess() {
    if (this.bridge.length === this.tryCount) {
      return true;
    }

    return false;
  }

  bridgeGetter() {
    return this.bridge;
  }

  tryCountGetter() {
    return this.tryCount;
  }

  checkCommandContinue(command) {
    if (command === 'R') {
      return true;
    }

    return false;
  }

  handleCommandInputException(command) {
    let count = 0;
    if (command === 'R') {
      count += 1;
    }

    if (command === 'Q') {
      count += 1;
    }

    if (count === 0) {
      throw new Error(ConstValue.RETRY_INPUT_EXCEPTION_ERROR_MESSAGE);
    }
  }
}
module.exports = BridgeGame;
