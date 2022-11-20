import BridgeGame from "./BridgeGame";

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

module.exports = App;
