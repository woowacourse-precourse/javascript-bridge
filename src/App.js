const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

class App {
  play() {
    this.startMessage();
    this.gameStart();
  }

  startMessage() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  }

  gameStart() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
