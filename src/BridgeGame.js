const MissionUtils = require("@woowacourse/mission-utils");
class BridgeGame {
  move(moving, bridge) {
    let lastIndex = moving.length - 1;

    if (
      moving.length == bridge.length &&
      moving[lastIndex] === bridge[lastIndex]
    ) {
      return "Done";
    } else if (moving[lastIndex] === bridge[lastIndex]) {
      return "Correct";
    } else if (moving[lastIndex] !== bridge[lastIndex]) {
      return "Incorrect";
    }
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
