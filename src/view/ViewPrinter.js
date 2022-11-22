const OutputView = require("../console/OutputView");
const MESSAGE = require("../lib/Message");
const MissionUtils = require("@woowacourse/mission-utils");

class ViewPrinter {
  #bridgeGame;

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  sayHello() {
    OutputView.printLine(MESSAGE.GAME_START);
  }

  printBridge() {
    const bridges = this.#bridgeGame.getBridge().getBridges();
    OutputView.printMap(...bridges);
  }

  printEndResult() {
    const bridges = this.#bridgeGame.getBridge().getBridges();
    const gameState = this.#bridgeGame.getState();
    const [upside, downside] = bridges;

    OutputView.printResult(gameState, upside, downside);
    MissionUtils.Console.close();
  }
}

module.exports = ViewPrinter;
