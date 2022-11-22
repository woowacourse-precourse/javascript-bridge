const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");
const {
  checkBridgeSize,
  checkSpace,
  checkRestart
 } = require("./Exception")
const { FINAL } = require("./Constant");
const OutputView = require("./OutputView");


const InputView = {
  readBridgeSize(bridge, bridgeGame) {
    Console.readLine(COMMAND.INPUT, (bridgeSize) => {
      if(checkBridgeSize(bridgeSize)) return this.readBridgeSize(bridge,bridgeGame);

      bridge.setBridge(Number(bridgeSize));
      this.readMoving(bridge, bridgeGame);
    });
  },

  readMoving(bridge, bridgeGame) {
    Console.readLine(COMMAND.MOVE, (space) => {
      if(checkSpace(space)) return this.readMoving(bridge,bridgeGame);
      bridgeGame.move(space, bridge);
      OutputView.printMap(bridgeGame);
      if (bridgeGame.isWrong(bridgeGame.getUpBridgeList(),bridgeGame.getDownBridgeList())) return this.readGameCommand(bridge, bridgeGame);
      if (bridgeGame.getCount() === bridge.getBridge().length) return OutputView.printResult(FINAL.SUCCESS, bridgeGame);
      return this.readMoving(bridge, bridgeGame);
    });
  },

  readGameCommand(bridge, bridgeGame) {
    Console.readLine(COMMAND.RESTART, (restart) => {
      if(checkRestart(restart)) return this.readGameCommand(bridge,bridgeGame);
      if (restart === "R") {
        bridgeGame.retry(bridge);
        return this.readMoving(bridge, bridgeGame);
      }
      if (restart === "Q") OutputView.printResult(FINAL.FAIL, bridgeGame);
    });
  },
};

module.exports = InputView;
