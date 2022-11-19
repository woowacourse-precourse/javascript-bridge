const OutputView = require("../console/OutputView");
const Message = require("../lib/Message");

class Printer {
  #bridgeGame;

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  printEndResult(bridges, gameState) {
    const [upside, downside] = bridges;
    OutputView.printResult(gameState, upside, downside);
    MissionUtils.Console.close();
  }

  sayHello() {
    OutputView.printLine(Message.GAME_START);
  }
}
