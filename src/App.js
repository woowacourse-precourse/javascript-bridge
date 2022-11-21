const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');

class App {
  #game;

  play() {
    OutputView.printStartMessage();
    this.#startGame();
  }

  async #startGame() {
    this.#game = new BridgeGame();
    await this.#tryCatch(this.#getAndSetBridgeSize.bind(this));
    this.#game.makeBridge();
    // this.#makeAttempt();
  }

  async #getAndSetBridgeSize() {
    const input = await InputView.readBridgeSize();
    this.#game.setSize(input);
  }

  #makeAttempt() {}

  async #tryCatch(tryfunc) {
    while (true) {
      try {
        await tryfunc();
        break;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }
}

module.exports = App;
const app = new App();
app.play();
