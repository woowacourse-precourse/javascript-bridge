const { BRIDGE, FINAL } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");

const OutputView = {
  start(){
    Console.print(COMMAND.START);
  },

  printMap(bridgeGame) {
    const upBridge = bridgeGame.getUpBridgeList();
    const downBridge = bridgeGame.getDownBridgeList();
    Console.print(`${BRIDGE.LEFT}${upBridge.join(`${BRIDGE.DIVISION}`)}${BRIDGE.RIGHT}`);
    Console.print(`${BRIDGE.LEFT}${downBridge.join(`${BRIDGE.DIVISION}`)}${BRIDGE.RIGHT}`);
    Console.print("");
  },

  printResult(success, bridgeGame) {
    Console.print(FINAL.RESULT_BRIDGE);
    this.printMap(bridgeGame);
    Console.print(`${FINAL.RESULT} ${success}`);
    Console.print(`${FINAL.TRY} ${bridgeGame.getCountRetry()}`);
    Console.close();
    
  },
};

module.exports = OutputView;
