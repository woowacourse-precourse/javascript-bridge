const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');
const { command } = require('./constants/Messages');

class App {
  #game;
  #attempts = 0;

  play() {
    OutputView.printStartMessage();
    this.#startGame();
  }

  async #startGame() {
    this.#game = new BridgeGame();
    let size = await this.#tryCatch(this.#getAndSetBridgeSize.bind(this));
    this.#game.makeBridge();
    const result = await this.#makeAttempt(size);
    console.log(result);
    // 져서 끝난 것이라면 retry 묻기!
  }

  async #getAndSetBridgeSize() {
    const input = await InputView.readBridgeSize();
    this.#game.setSize(input);
    return Number(input);
  }

  async #makeAttempt(size) {
    this.#attempts++;
    let round = 0;
    let moves = [];

    while (round < size) {
      let roundResult = await this.#playRound(round, moves);
      moves[round++] = [roundResult, command];

      if (!roundResult) return false;
    }

    return true;
  }

  // round 에서 프린트까지!
  async #playRound(currentRound, moves) {
    let command = await InputView.readMoving();
    let moveResult = await this.#game.move(command, currentRound);

    OutputView.printMap(moves.concat([[moveResult, command]]));
  }

  async #tryCatch(tryfunc) {
    while (true) {
      try {
        const result = await tryfunc();
        return result;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }
}

module.exports = App;
const app = new App();
app.play();
