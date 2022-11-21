const GAME = require('./consts/Game');
const EXCEPTION_MESSAGE = require('./consts/Exception');
const Exception = require('./Exception');

class BridgeGame {
  bridge;
  turn;

  constructor(bridge) {
    this.bridge = bridge;
    this.turn = 0;
  }

  getBridge() {
    return this.bridge;
  }

  getTurn() {
    return this.turn;
  }

  move(moving) {
    this.handleMovingException(moving);

    if (this.bridge[this.turn] === moving) {
      this.increaseTurn();
      return true;
    }

    return false;
  }

  handleMovingException(moving) {
    try {
      this.throwException(moving);
    } catch (e) {
      Exception.printError(e.message);
    }
  }

  throwException(moving) {
    switch (false) {
      case [GAME.UP, GAME.DOWN].includes(moving):
        Exception.throwError(EXCEPTION_MESSAGE.MOVING.CHARACTER);
    }
  }

  increaseTurn() {
    this.turn += 1;
  }

  isSuccess() {
    if (this.bridge.length === turn) {
      return true;
    }

    return false;
  }

  retry(command) {
    this.handleRetryException(command);

    if (this.isCommandContinue(command)) {
      this.turn = 0;
      return true;
    }

    return false;
  }

  handleRetryException(command) {
    try {
      this.throwException(command);
    } catch (e) {
      Exception.printError(e.message);
    }
  }

  throwException(command) {
    switch (false) {
      case [GAME.RESTART, GAME.QUIT].includes(command):
        Exception.throwError(EXCEPTION_MESSAGE.RETRY);
    }
  }

  isCommandContinue(command) {
    if (command === GAME.RESTART) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
