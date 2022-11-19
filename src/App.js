const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const { OUTPUT } = require("./constants/messages");

class App {
  play() {
    this.printStart();
    this.playGame();
  }

  printStart() {
    Console.print(`${OUTPUT.START}${OUTPUT.LINE}`);
  }

  playGame() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

// module.exports = App;
new App().play();
