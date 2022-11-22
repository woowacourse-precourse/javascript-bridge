const { readBridgeSize } = require("./InputView");
const { gameStart } = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    gameStart();
    readBridgeSize((bridgeLength) => {
      this.bridgeGame.createBridge(bridgeLength);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
