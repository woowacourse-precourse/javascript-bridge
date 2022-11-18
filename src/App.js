const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("./constants/Message");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;
  #retryCount;
  constructor() {
    this.#retryCount = 1;
  }
  async play() {
    Console.print(GAME_MSG.START);
    await this.createBridgeGame();
    const reuslt = await this.playBridgeGame();
    OutputView.printResult(reuslt, this.#retryCount);
    Console.close();
  }

  async createBridgeGame() {
    this.#bridgeGame = new BridgeGame();
    await this.#bridgeGame.setBridge();
  }

  async playBridgeGame() {
    while (true) {
      const isSuccess = await this.#bridgeGame.move();
      if (isSuccess === 0) {
        if ((await InputView.readGameCommand()) === "Q") return false;
        this.#retryCount = this.#bridgeGame.retry(this.#retryCount);
      }
      if (isSuccess === 2) return true;
    }
  }
}

module.exports = App;
const app = new App();
app.play();
