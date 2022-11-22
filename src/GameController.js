const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { OUTPUT_MSG } = require('./constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class GameController {
  #game;

  constructor() {
    this.#game = new BridgeGame();
  }

  start() {
    Console.print(OUTPUT_MSG.start);
    InputView.readBridgeSize(len => {
      this.#game.makeBridge(len);
      this.moveByCommand();
    });
  }

  moveByCommand() {
    InputView.readMoving(position => {
      const { state, lastPosition, isPossible, tryCount } =
        this.#game.move(position);
      OutputView.printMap(state, isPossible);
      if (isPossible) {
        if (lastPosition) this.quit(state, isPossible, tryCount);
        if (!lastPosition) this.moveByCommand();
      }
      if (!isPossible)
        InputView.readGameCommand(this.retry.bind(this), () => {
          this.quit(state, false, tryCount);
        });
    });
  }

  retry() {
    this.#game.retry();
    this.moveByCommand();
  }

  quit(state, isSuccess, tryCount) {
    OutputView.printResult(state, isSuccess, tryCount);
  }
}

module.exports = GameController;
