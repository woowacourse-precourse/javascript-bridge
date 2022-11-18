const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const InputView = require("./InputView");

class BridgeGame {
  move(moving, bridge, selectMoving, retry, printResult) {
    let lastIndex = moving.length - 1;

    if (
      moving.length == bridge.length &&
      moving[lastIndex] === bridge[lastIndex]
    ) {
      OutputView.printMap(moving, true);
      printResult(true);
      MissionUtils.Console.close();
    } else if (moving[lastIndex] === bridge[lastIndex]) {
      OutputView.printMap(moving, true);
      selectMoving();
    } else if (moving[lastIndex] !== bridge[lastIndex]) {
      OutputView.printMap(moving, false);
      this.retry(retry, printResult);
    }
  }

  retry(retry, printResult) {
    InputView.readGameCommand((command) => {
      if (command == "R") {
        retry();
      } else if (command == "Q") {
        printResult(false);
        MissionUtils.Console.close();
      }
    });
  }
}

module.exports = BridgeGame;
