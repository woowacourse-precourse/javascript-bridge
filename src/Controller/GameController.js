const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../Model/BridgeGame');
const { readBridgeSize, readMoving, readGameCommand } = require('../View/InputView');
const { printStart, printMap, printResult } = require('../View/OutputView');
const { RETRY, QUIT } = require('../constants/Command');

class GameController {
  #bridgeGame = new BridgeGame();

  start() {
    printStart();

    readBridgeSize(this.prepare.bind(this));
  }

  prepare(size) {
    this.#bridgeGame.setBridge(size);

    readMoving(this.moveSingleStep.bind(this));
  }

  moveSingleStep(movingCommand) {
    const { isMovable, isSuccess, mapRows } = this.#bridgeGame.move(movingCommand);
    printMap(mapRows);

    this.continueOrStop(isMovable, isSuccess);
  }

  continueOrStop(isMovable, isSuccess) {
    if (isSuccess) return this.quit(true);

    if (isMovable) return readMoving(this.move.moveSingleStep(this));

    return readGameCommand(this.decideToRetryOrQuit.bind(this));
  }

  decideToRetryOrQuit(command) {
    if (command === RETRY) return this.retry();

    if (command === QUIT) return this.quit(false);
  }

  restart() {
    this.#bridgeGame.retry();

    readMoving(this.move.bind(this));
  }

  quit(isSuccess) {
    const { mapRows, tryCount } = this.#bridgeGame.getResult();
    printResult(mapRows, isSuccess, tryCount);

    Console.close();
  }
}

module.exports = GameController;
