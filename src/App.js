const InputView = require("./InputView");
const { Console, Random } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    this.gameStart((newGame) => {
      newGame.gamePlay();
    });
  }

  gameStart(newGame) {
    OutputView.gameStart();
    InputView.readBridgeSize((size) => {
      newGame(this.generateBridge(size));
    });
  }

  generateBridge(size) {
    let bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    return new BridgeGame(bridge);
  }

  stopProgram() {
    Console.close();
  }
}

module.exports = App;

app = new App();
app.play();
