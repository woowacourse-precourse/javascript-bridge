const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("./constants/Message");

class App {
  async play() {
    Console.print(GAME_MSG.START);
    const bridgeGame = new BridgeGame();
    await bridgeGame.setBridge();
    const isSuccess = await bridgeGame.move();
  }
}

module.exports = App;
const app = new App();
app.play();
