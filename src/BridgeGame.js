const { INPUT_VALUE } = require("./constants/InputValue");

class BridgeGame {
  move(moving, bridge) {
    if (moving[moving.length - 1] === bridge[moving.length - 1]) {
      return moving.length == bridge.length ? "Finish" : "Continue";
    }
    return "Retry";
  }

  retry(command) {
    if (command == INPUT_VALUE.RETRY) {
      return true;
    } else if (command == INPUT_VALUE.QUIT) {
      return false;
    }
  }
}

module.exports = BridgeGame;
