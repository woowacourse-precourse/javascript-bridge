const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { OUTPUT_MSG } = require('./constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { RETRY_COMMAND_TYPE } = require('./constants');

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
      const { state, lastPosition, isPossible } = this.#game.move(position);
      OutputView.printMap(state, isPossible);
      this.judgeNext(state, lastPosition, isPossible);
    });
  }

  judgeNext(state, lastPosition, isPossible) {
    if (isPossible) {
      if (lastPosition) this.quit(state, isPossible);
      if (!lastPosition) this.moveByCommand();
    }
    if (!isPossible)
      InputView.readGameCommand(this.judgeRestart.bind(this, state));
  }

  judgeRestart(state, command) {
    if (command === RETRY_COMMAND_TYPE[0]) {
      this.retry();
    }
    if (command === RETRY_COMMAND_TYPE[1]) {
      this.quit(state, false);
    }
  }

  retry() {
    this.#game.retry();
    this.moveByCommand();
  }

  quit(state, isSuccess) {
    const { tryCount } = this.#game;
    OutputView.printResult(state, isSuccess, tryCount);
  }
}

module.exports = GameController;
