const Game = require("./Bridge.Domain/Game");

class App {
  #bridgeGame = new Game();

  play() {
    this.#bridgeGame.start();
  }
}

const a = new App();
a.play();

module.exports = App;
