const InputView = require("./View/InputView");
const { printResult, printMap } = require("./View/OutputView");

class Controller {
  #correct;
  #game;

  constructor(game) {
    this.#game = game;
  }

  start() {
    let location = 0;
    while (location <= this.#game.getBridgeMap().length - 1) {
      this.#correct = this.#game.move(location, InputView.readMoving());
      printMap(this.#game.getBridgeMap(), location, this.#correct);
      location += 1;
      if (!this.#correct) {
        location = this.setCommand();
      }
    }
    printResult(this.#game, location - 1, this.#correct);
  }

  setCommand() {
    if (InputView.readGameCommand() === KEY.RETRY) {
      this.#game.retry();
      return 0;
    }
    return this.#game.getBridgeMap().length;
  }
}

module.exports = Controller;
