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
    let [result, moves] = await this.#temp(size);
    return this.#end(result, moves);
  }

  async #startGame() {
    this.#game = new BridgeGame();
    let size = await this.#tryCatch(this.#getAndSetBridgeSize.bind(this));
    this.#game.makeBridge();
    return size;
  }

  #end(result, moves) {
    OutputView.printResult(result, this.#attempts, moves);
  }

  async #getAndSetBridgeSize() {
    const input = await InputView.readBridgeSize();
    this.#game.setSize(input);
    return Number(input);
  }

  async #temp(size) {
    let [attemptResult, moves] = await this.#makeAttempt(size);

    if (!attemptResult) {
      while (true) {
        try {
          let reply = await InputView.readGameCommand();
          let retry = await this.#game.retry(reply);
          if (retry) return this.#temp(size);
          break;
        } catch (error) {
          OutputView.printError(error);
        }
      }
    }

    return [attemptResult, moves];
  }

  async #makeAttempt(size) {
    this.#attempts++;
    let round = 0;
    let moves = [];

    while (round < size) {
      let [moveResult, command] = await this.#playRound(round, moves);
      moves[round++] = [moveResult, command];

      if (!moveResult) return [false, [...moves]];
    }

    return [true, [...moves]];
  }

  // round 에서 프린트까지!
  async #playRound(currentRound, moves) {
    while (true) {
      try {
        // 이거 3개를 함수로 묶어버리면 될 듯
        let command = await InputView.readMoving();
        let moveResult = await this.#game.move(command, currentRound);
        OutputView.printMap(moves.concat([[moveResult, command]]));
        return [moveResult, command];
      } catch (error) {
        OutputView.printError(error);
      }
    }
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
