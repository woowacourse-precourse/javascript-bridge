const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class BridgeGameController {
  #bridgeGame;

  makeBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  manageMoving(moving) {
    const isWrong = this.#bridgeGame.move(moving);
    const bridgeSketch = this.#bridgeGame.bringSketch();
    OutputView.printMap(bridgeSketch);
    return isWrong;
  }

  manageCommand(command) {
    const isRetry = this.#bridgeGame.retry(command);
    return isRetry;
  }

  isGameEnd() {
    const isGameEnd = this.#bridgeGame.isGameEnd();
    return isGameEnd;
  }

  gameOver(state = false) {
    const resultMap = this.#bridgeGame.bringSketch();
    const countRetry = this.#bridgeGame.bringCountRetry();
    OutputView.printResult(resultMap, state, countRetry);
    Console.close();
  }
}

module.exports = BridgeGameController;