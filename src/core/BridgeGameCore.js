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
}

module.exports = BridgeGameCore;
