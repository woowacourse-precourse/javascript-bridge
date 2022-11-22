const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');

let instance = null;

class App {
  #game;
  #attempts = 0;

  constructor() {
    if (instance) return instance;

    instance = this;
  }

  async play() {
    OutputView.printStartMessage();
    let size = await this.#startGame();
    let [result, moves] = await this.#getGameResult(size);

    return this.#end(result, moves);
  }

  async #startGame() {
    this.#game = new BridgeGame();
    let size = await this.#tryCatch(this.#getAndSetBridgeSize.bind(this));
    this.#game.makeBridge();

    return size;
  }

  async #getAndSetBridgeSize() {
    const input = await InputView.readBridgeSize();
    this.#game.setSize(input);

    return Number(input);
  }

  async #getGameResult(size) {
    let [attemptResult, moves] = await this.#makeAttempt(size);

    if (!attemptResult) {
      let result = await this.#tryCatch(this.#readReplyAndCheckRetry.bind(this), size);
      if (result) return result;
    }

    return [attemptResult, moves];
  }

  async #makeAttempt(size) {
    this.#attempts++;
    let round = 0;

    return this.#playRounds(round, size);
  }

  async #readReplyAndCheckRetry(size) {
    let reply = await InputView.readGameCommand();
    let retry = await this.#game.retry(reply);

    return retry ? this.#getGameResult(size) : null;
  }

  async #playRounds(round, size) {
    const moves = [];

    while (round < size) {
      let [moveResult, command] = await this.#tryCatch(this.#playRound.bind(this), round, moves);
      moves[round++] = [moveResult, command];

      if (!moveResult) return [false, [...moves]];
    }

    return [true, [...moves]];
  }

  async #playRound(currentRound, moves) {
    let command = await InputView.readMoving();
    let moveResult = await this.#game.move(command, currentRound);
    let updatedMoves = moves.concat([[moveResult, command]]);
    OutputView.printMap(updatedMoves);

    return [moveResult, command];
  }

  async #end(result, moves) {
    OutputView.printResult(result, this.#attempts, moves);
  }

  async #tryCatch(tryfunc, ...args) {
    while (true) {
      try {
        const result = await tryfunc(...args);
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
