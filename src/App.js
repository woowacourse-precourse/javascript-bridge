const MissionUtils = require("@woowacourse/mission-utils");
const { PRINT, KEY } = require("./constants/constants");

const Validation = require("./Utils/Validation");
const BridgeGame = require("./BridgeGame");
const { printResult, printMap } = require("./View/OutputView");
const InputView = require("./View/InputView");
class App {
  #correct;
  #command;
  #size;

  play() {
    this.#size = this.setSize();
    const game = new BridgeGame(this.#size);
    let location = -1;
    while (this.#command !== KEY.QUIT) {
      this.#correct = game.move(++location, InputView.readMoving());
      printMap(game.getBridgeMap(), location, this.#correct);
      if (this.#correct && location === this.#size - 1) break;
      if (!this.#correct) location = this.getCommand(game, location);
    }
    printResult(game, location, this.#correct);
  }

  setSize() {
    while (this.#size === undefined) {
      try {
        MissionUtils.Console.print(PRINT.START_GAME);
        this.#size = InputView.readBridgeSize();
      } catch (e) {
        MissionUtils.Console.print(e);
      }
    }
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

module.exports = App;
