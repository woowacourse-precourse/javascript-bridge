const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const { OUTPUT } = require("./constant/constantValue");

class App {
  play() {
    this.startMessage();
    this.gameStart();
  }

  startMessage() {
    Console.print(`${OUTPUT.START}\n`);
  }

  gameStart() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
