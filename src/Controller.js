const MissionUtils = require("@woowacourse/mission-utils");
const { PRINT, KEY } = require("./constants/constants");

const BridgeGame = require("./BridgeGame");
const { printResult, printMap } = require("./View/OutputView");
const InputView = require("./View/InputView");

class Controller {
  #correct;
  #command;

  start() {
    MissionUtils.Console.print(PRINT.START_GAME);
    const size = InputView.readBridgeSize();
    const game = new BridgeGame(size);
    const location = -1;
    this.play(game, size, location);
  }

  play(game, size, location) {
    while (this.#command !== KEY.QUIT) {
      this.#correct = game.move(++location, InputView.readMoving());
      printMap(game.getBridgeMap(), location, this.#correct);
      if (this.#correct && location === size - 1) break;
      if (!this.#correct) {
        location = this.getCommand(game, location);
      }
    }
    printResult(game, location, this.#correct);
  }

  getCommand(game, location) {
    this.#command = InputView.readGameCommand();
    if (this.#command === KEY.RETRY) {
      game.retry();
      return -1;
    }
    return location;
  }
}
module.exports = Controller;
