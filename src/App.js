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

  // play() {
  //   (async () => await this._play())();
  //   Console.print("!!!");
  // }

  async play() {
    Console.print(GAME_MSG.START);
    const size = await InputView.readBridgeSize();
    Console.print(size);
    this.createBridgeGame(size);
    const result = await this.playBridgeGame();
    OutputView.printResult(
      result,
      this.#retryCount,
      this.#bridgeGame.getBridge()
    );
    Console.close();
  }

  createBridgeGame(size) {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.setBridge(size);
  }

  async playBridgeGame() {
    const moving = await InputView.readMoving();
    const [isSuccess, crossBridge] = this.#bridgeGame.move(moving);
    OutputView.printMap(crossBridge);
    if (isSuccess === 0) {
      const command = await InputView.readGameCommand();
      if (command === "Q") return false;
      this.#retryCount = this.#bridgeGame.retry(this.#retryCount);
    }
    if (isSuccess === 2) return true;
    await this.playBridgeGame();
  }
}

module.exports = App;
const app = new App();
app.play();
