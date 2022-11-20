const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');

class GameController {
  #bridgeGame;

  print(message) {
    OutputView.printMessage(message);
  }

  handleSize(size) {
    const bridge = makeBridge(size, generate);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  handleDirection(direction) {
    const isCorrectDirection = this.#bridgeGame.move(direction);
    const curMapState = this.#bridgeGame.drawMap(isCorrectDirection, direction);
    OutputView.printMap(curMapState);

    return isCorrectDirection;
  }

  doesUserWin() {
    const doesUserWin = this.#bridgeGame.gameComplete();

    return doesUserWin;
  }

  handleCommand(command) {
    const shouldRetry = this.#bridgeGame.retry(command);

    return shouldRetry;
  }

  gameOver(userWin = false) {
    const gameResult = this.#bridgeGame.gameResult(userWin);
    OutputView.printResult(gameResult);
    Console.close();
  }
}

module.exports = GameController;
