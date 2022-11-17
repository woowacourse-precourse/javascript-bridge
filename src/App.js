const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const Game = new BridgeGame();
    Game.start();
  }
}

const appli = new App();
appli.play();
module.exports = App;
