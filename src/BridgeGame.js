const InputView = require("./InputView");
const OutputView = require("./OutputView");

class BridgeGame {

  move(turnNumber, bridge, moveUpDown) {
    if (bridge[turnNumber] == moveUpDown) {
      OutputView.printMap(turnNumber, bridge, moveUpDown, true);
      if (turnNumber == bridge.length - 1) {
        OutputView.printResult(turnNumber, bridge, moveUpDown, true);
        return 0;
      }
      return 1;
    }
    if (bridge[turnNumber] != moveUpDown) {
      OutputView.printMap(turnNumber, bridge, moveUpDown, false);
      return 0;
    }
  }

  retry(nowLength, brg, moveUpDown) {
    let isRetry = InputView.readGameCommand();
    if (isRetry) InputView.readMoving(brg, 0);
    if (!isRetry) OutputView.printResult(nowLength, brg, moveUpDown,false);
    return;
  }
}

module.exports = BridgeGame;
