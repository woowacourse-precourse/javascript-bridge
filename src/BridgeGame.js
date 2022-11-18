const MissionUtils = require("@woowacourse/mission-utils");
class BridgeGame {
  move(moving, bridge) {
    if (moving[moving.length - 1] === bridge[moving.length - 1]) {
      return moving.length == bridge.length ? "Done" : "Correct";
    }
    return "Incorrect";
  }

  retry(command, retry, printResult) {
    if (command == "R") {
      retry();
    } else if (command == "Q") {
      printResult(false);
      MissionUtils.Console.close();
    }
  }
}

module.exports = BridgeGame;
