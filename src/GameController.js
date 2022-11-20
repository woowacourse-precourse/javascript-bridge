const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const { MESSAGE } = require('./constant');

class GameController {
  #bridgeGame;

  gameStart() {
    OutputView.printMessage(MESSAGE.START_NOTIFICATION);
  }

  handleSize(size) {
    const bridge = makeBridge(size, generate);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  handleDirection(direction) {
    const successfulMove = this.#bridgeGame.move(direction);
    const curMapState = this.#bridgeGame.drawMap(successfulMove, direction);
    OutputView.printMap(curMapState);

    return successfulMove;
  }

  doseUserWin() {
    const userWin = this.#bridgeGame.gameComplete();

    return userWin;
  }

  handleCommand(command) {
    const shouldRetry = this.#bridgeGame.retry(command);

    return shouldRetry;
  }

  retry() {
    this.#bridgeGame.increaseNumberOfAttempts();
    this.#bridgeGame.initPlayData();
  }

  gameOver(userWin = false) {
    const gameResult = this.#bridgeGame.gameResult(userWin);
    OutputView.printResult(gameResult);
    Console.close();
  }
}

module.exports = GameController;
