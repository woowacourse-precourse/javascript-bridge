const BridgeGame = require("./presenter/BridgeGame");

class App {
  play() {
    // const game = new BridgeGame();
    // game.start();
    const bridgeGamePresenter = new BridgeGame();
    bridgeGamePresenter.start();
  }
}

const app = new App();
app.play();

module.exports = App;
