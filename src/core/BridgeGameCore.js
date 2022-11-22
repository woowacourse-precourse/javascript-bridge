const COMMAND = Object.freeze({
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
});

class BridgeGameCore {
  static get MOVE_COMMAND() {
    return Object.freeze({ UP: "U", DOWN: "D" });
  }

  static get RETRY_COMMAND() {
    return Object.freeze({ RETRY: "R", QUIT: "Q" });
  }

  static get BRIDGE_RANGE() {
    return Object.freeze({ MIN: 3, MAX: 20 });
  }

  isCommandUp(command) {
    return command === COMMAND.UP;
  }

  isCommandDown(command) {
    return command === COMMAND.DOWN;
  }

  isCommandRetry(command) {
    return command === COMMAND.RETRY;
  }

  isCommandQuit(command) {
    return command === COMMAND.QUIT;
  }
}

module.exports = BridgeGameCore;
