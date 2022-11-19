const MissionUtils = require("@woowacourse/mission-utils");
const { PRINT, KEY } = require("./constants/constants");

const Validation = require("./Utils/Validation");
const BridgeGame = require("./BridgeGame");
const { printResult, printMap } = require("./View/OutputView");
const InputView = require("./View/InputView");

class Controller {
  #correct;
  #command;
  #size;

  setting() {
    try {
      MissionUtils.Console.print(PRINT.START_GAME);
      this.#size = InputView.readBridgeSize();
    } catch (e) {
      MissionUtils.Console.print(e);
      // this.setting();
    }
  }

  start() {
    const game = new BridgeGame(this.#size);
    const location = -1;
    this.play(game, this.#size, location);
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
