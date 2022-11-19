const OutputView = require("../console/OutputView");
const Message = require("../lib/Message");
const MissionUtils = require("@woowacourse/mission-utils");

class Printer {
  #bridgeGame2;

  constructor(bridgeGame2) {
    this.#bridgeGame2 = bridgeGame2;
  }

  printEndResult(bridges, gameState) {
    const [upside, downside] = bridges;
    OutputView.printResult(gameState, upside, downside);
    MissionUtils.Console.close();
  }

  sayHello() {
    OutputView.printLine(Message.GAME_START);
  }

  printBridge(bridges) {
    // const [upBridge, downBridge] = bridges;
    // OutputView.printMap(upBridge, downBridge);
    OutputView.printMap(...bridges);
  }
}

module.exports = Printer;
