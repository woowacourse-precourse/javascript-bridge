const MissionUtils = require("@woowacourse/mission-utils");

class BridgeGame {
  move(moving, bridge) {
    if (moving[moving.length - 1] === bridge[moving.length - 1]) {
      return moving.length == bridge.length ? "Finish" : "Continue";
    }
    return "Retry";
  }

  retry(command) {
    if (command == "R") {
      return true;
    } else if (command == "Q") {
      return false;
    }
  }
}

module.exports = BridgeGame;
