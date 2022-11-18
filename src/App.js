const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("./constants/Message");

class App {
  #bridgeGame;

  async play() {
    Console.print(GAME_MSG.START);
    await this.createBridgeGame();
    await this.playBridgeGame();
  }

  async createBridgeGame() {
    this.#bridgeGame = new BridgeGame();
    await this.#bridgeGame.setBridge();
  }

  async playBridgeGame() {
    while (true) {
      const isSuccess = await this.#bridgeGame.move();
      if (isSuccess === 0) {
        console.log("실패");
        break;
      }
      if (isSuccess === 2) break;
    }
  }
}

module.exports = App;
const app = new App();
app.play();
