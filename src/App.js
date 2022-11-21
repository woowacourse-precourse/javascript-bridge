const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { OUTPUT_MESSAGE } = require("./constants/message");
const InputView = require("./InputView");

class App {
  play() {
    this.printGameStart();
    this.gamePlay();
  }
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.START);
  }
  gamePlay() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
