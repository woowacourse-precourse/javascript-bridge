const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');

// app 싱글톤으로 만들기
class App {
  #game;
  #attempts = 0;

  async play() {
    OutputView.printStartMessage();
    let size = await this.#startGame();
    await this.#temp(size);
    return this.#end();
  }

  async #startGame() {
    this.#game = new BridgeGame();
    let size = await this.#tryCatch(this.#getAndSetBridgeSize.bind(this));
    this.#game.makeBridge();
    return size;
  }

  #end() {
    console.log('~~끗~~');
  }

  async #getAndSetBridgeSize() {
    const input = await InputView.readBridgeSize();
    this.#game.setSize(input);
    return Number(input);
  }

  async #temp(size) {
    let attemptResult = await this.#makeAttempt(size);

    if (!attemptResult) {
      let reply = await InputView.readGameCommand();
      let retry = await this.#game.retry(reply);
      if (retry) return this.#temp(size);
    }
  }

  async #makeAttempt(size) {
    this.#attempts++;
    let round = 0;
    let moves = [];

    while (round < size) {
      let [moveResult, command] = await this.#playRound(round, moves);
      moves[round++] = [moveResult, command];

      if (!moveResult) return false;
    }

    return true;
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
const app = new App();
app.play();
